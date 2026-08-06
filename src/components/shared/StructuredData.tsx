import { profile, timeline } from '@/data/profile';
import { SITE_URL } from '@/lib/site';

/**
 * schema.org Person graph. Lets search engines and AI crawlers read the role,
 * employer and skills as data instead of guessing from prose — worth having on
 * a portfolio that recruiters will look up by name.
 */
export default function StructuredData() {
  const currentRole = timeline.find((item) => item.type === 'work' && item.org);

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: SITE_URL,
    image: `${SITE_URL}${profile.avatar}`,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location,
      addressCountry: 'VN',
    },
    description: profile.bio,
    sameAs: [profile.social.github, profile.social.linkedin, profile.social.facebook].filter(
      Boolean,
    ),
    knowsAbout: profile.skillGroups.flatMap((group) => group.items),
    ...(currentRole?.org && {
      worksFor: { '@type': 'Organization', name: currentRole.org },
    }),
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Trường Đại học Nông Lâm TP.HCM',
    },
    hasCredential: profile.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.name,
      dateCreated: cert.year,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
