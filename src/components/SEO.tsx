import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export default function SEO({ title, description, url, image }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* Google Analytics & GTM */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `,
        }}
      />
      {/* Fallback: Plausible Analytics */}
      <script defer data-domain="productivelift.site" src="https://plausible.io/js/plausible.js"></script>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ProductiveLift",
            "url": "https://productivelift.site",
            "logo": "https://productivelift.site/images/hero-mockup.png",
            "sameAs": [
              "https://twitter.com/productivelift",
              "https://facebook.com/productivelift"
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://productivelift.site",
            "name": "ProductiveLift",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://productivelift.site/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
    </Head>
  );
}
