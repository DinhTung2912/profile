/**
 * Canonical origin for the site — used by metadataBase, the sitemap and
 * robots.txt. Keep it pointing at the URL that actually serves this site.
 *
 * TODO: switch back to 'https://erpai.link' once DNS for that domain can be
 * repointed at Vercel. WordPress.com locks DNS and nameserver changes for the
 * first year on domains attached to a Gravatar profile (unlocks on renewal,
 * ~June 2027, or earlier via an early renewal / registrar transfer).
 * Until then erpai.link serves a Gravatar page, so declaring it as canonical
 * would point search engines at content that isn't this site.
 */
export const SITE_URL = 'https://tung-erp.vercel.app';
