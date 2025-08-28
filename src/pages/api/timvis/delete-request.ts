import type { NextApiRequest, NextApiResponse } from 'next';
import supabaseAdmin from '../../../lib/supabaseAdmin';

type Data = { ok: boolean; id?: string; error?: string };

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('[delete-request] ===== NEW REQUEST =====');
  console.log('[delete-request] incoming request', { method: req.method, url: req.url });

  if (req.method !== 'POST') {
    console.warn('[delete-request] method not allowed:', req.method);
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  console.log('[delete-request] env presence', {
    hasSupabaseUrl: !!SUPABASE_URL,
    hasServiceKey: !!SUPABASE_SERVICE_ROLE_KEY,
  });

  console.log('[delete-request] env values (debug):', {
    SUPABASE_URL: SUPABASE_URL ? SUPABASE_URL.substring(0, 20) + '...' : 'null/undefined',
    SUPABASE_SERVICE_ROLE_KEY: SUPABASE_SERVICE_ROLE_KEY ? 'present (length: ' + SUPABASE_SERVICE_ROLE_KEY.length + ')' : 'null/undefined',
  });

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('[delete-request] Supabase not configured on server');
    return res.status(500).json({ ok: false, error: 'Supabase not configured on server' });
  }

  const supabase = supabaseAdmin;
  console.log('[delete-request] supabase client obtained from supabaseAdmin');

  const { email, reason, details } = req.body ?? {};
  console.log('[delete-request] payload', { email: typeof email, reason: typeof reason, detailsLength: typeof details === 'string' ? details.length : null });
  if (!email || typeof email !== 'string') return res.status(400).json({ ok: false, error: 'email is required' });

  // basic email format check
  const emailTrim = email.trim();
  const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRe.test(emailTrim)) return res.status(400).json({ ok: false, error: 'invalid email' });

  const reasonTrim = typeof reason === 'string' ? reason.trim().slice(0, 200) : null;
  const detailsTrim = typeof details === 'string' ? details.trim().slice(0, 2000) : null;

  try {
    const payload = { email: emailTrim, reason: reasonTrim, details: detailsTrim, status: 'pending' };
    console.log('[delete-request] inserting payload to supabase', { email: emailTrim, reason: reasonTrim, detailsLength: detailsTrim?.length ?? 0 });
    const { data, error } = await supabase.from('delete_requests').insert(payload).select('id').single();
    if (error) {
      console.error('[delete-request] supabase insert error', error);
      // include error details in response for debugging (non-sensitive)
      return res.status(500).json({ ok: false, error: error.message });
    }
    console.log('[delete-request] insert success', { id: data?.id });
    return res.status(200).json({ ok: true, id: data.id });
  } catch (err: any) {
    console.error('[delete-request] unexpected error', err?.stack ?? err);
    return res.status(500).json({ ok: false, error: err?.message ?? 'unknown' });
  }
}
