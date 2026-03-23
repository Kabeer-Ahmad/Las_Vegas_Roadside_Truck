/**
 * Set in .env.local when your production domain and email are ready:
 * NEXT_PUBLIC_SITE_URL=https://your-domain.com
 * NEXT_PUBLIC_CONTACT_EMAIL=you@your-domain.com
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";
