import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Server-only Supabase client. Uses the Service Role key — keep this secret.
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('[supabaseAdmin] Environment variables loaded:', {
  SUPABASE_URL: SUPABASE_URL ? 'present (length: ' + SUPABASE_URL.length + ')' : 'missing',
  SUPABASE_SERVICE_ROLE_KEY: SUPABASE_SERVICE_ROLE_KEY ? 'present (length: ' + SUPABASE_SERVICE_ROLE_KEY.length + ')' : 'missing',
});

let supabaseAdmin: SupabaseClient;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  // During build or in environments without env vars, we still export a stub.
  // Throwing here would break builds; callers should handle missing config.
  console.warn('Warning: Supabase admin keys are not configured. Server routes using Supabase will fail.');
  console.warn('SUPABASE_URL:', SUPABASE_URL);
  console.warn('SUPABASE_SERVICE_ROLE_KEY:', SUPABASE_SERVICE_ROLE_KEY ? 'present but not shown' : 'missing');
  supabaseAdmin = createClient('https://dummy.supabase.co', 'dummy-key');
} else {
  try {
    supabaseAdmin = createClient(
      SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY,
      { global: { headers: { 'x-admin-action': 'server-client' } } }
    );
    console.log('[supabaseAdmin] Supabase client created successfully');
  } catch (error) {
    console.error('[supabaseAdmin] Failed to create Supabase client:', error);
    supabaseAdmin = createClient('https://dummy.supabase.co', 'dummy-key');
  }
}

export { supabaseAdmin };
export default supabaseAdmin;
