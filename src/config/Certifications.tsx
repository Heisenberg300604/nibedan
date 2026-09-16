export type CertificationIssuer = 'aws' | 'hackerrank';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  /** Which issuer logo to render. Keeps the config free of JSX. */
  issuerKey: CertificationIssuer;
  /** Machine-readable issue date, straight off the certificate. */
  issued: string;
  /** Machine-readable expiry date. Omitted for credentials that never expire. */
  expires?: string;
  credentialId: string;
  /** Public verification page for the credential. */
  verifyUrl: string;
  /** Certificate image in /public/certifications. */
  image: string;
  /**
   * Official issuer badge artwork, saved locally from the credential's public
   * Credly page so the card never depends on a third-party embed script.
   */
  badge?: string;
  description: string;
  skills: string[];
  /** Featured credentials lead the page and appear on the landing section. */
  featured: boolean;
}

export const certifications: Certification[] = [
  {
    id: 'aws-certified-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issuerKey: 'aws',
    issued: '2026-09-08',
    expires: '2029-09-08',
    credentialId: 'b9f6700bd9534f948f0d712394265ba3',
    verifyUrl:
      'https://www.credly.com/badges/4d841c4e-fee6-4640-8c20-847d817a46b2/public_url',
    image: '/certifications/aws_ccp.png',
    badge: '/certifications/badges/aws-cloud-practitioner.png',
    description:
      'Validates foundational knowledge of AWS cloud concepts, core services, pricing and billing models, security, and cloud architecture.',
    skills: [
      'AWS',
      'Cloud Computing',
      'Cloud Architecture',
      'Core AWS Services',
      'Pricing & Billing',
      'Cloud Security',
    ],
    featured: true,
  },
  {
    id: 'aws-certified-ai-practitioner',
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issuerKey: 'aws',
    issued: '2026-09-01',
    expires: '2029-09-01',
    credentialId: '625ec4c35dd6497d98ff8230a4a49212',
    verifyUrl:
      'https://www.credly.com/badges/490f5b43-303c-4ffa-841f-3bf225076261/public_url',
    image: '/certifications/aws_ai_pract.png',
    badge: '/certifications/badges/aws-ai-practitioner.png',
    description:
      'A foundation in AI, machine learning, and generative AI on AWS — model selection, prompt engineering, responsible AI, and services such as Amazon SageMaker and Amazon Bedrock.',
    skills: [
      'AWS',
      'Generative AI',
      'Machine Learning',
      'Amazon SageMaker',
      'Responsible AI',
    ],
    featured: true,
  },
  {
    id: 'hackerrank-sql-intermediate',
    title: 'SQL (Intermediate) Certificate',
    issuer: 'HackerRank',
    issuerKey: 'hackerrank',
    issued: '2026-05-09',
    credentialId: 'd9f67a39cb00',
    verifyUrl: 'https://www.hackerrank.com/certificates/d9f67a39cb00',
    image: '/certifications/hackkerank_sql.png',
    description:
      'Timed skill assessment covering complex joins, aggregations, subqueries, and window functions against a live database.',
    skills: ['SQL', 'MySQL', 'Databases', 'Query Optimisation'],
    featured: false,
  },
];

export const featuredCertifications = certifications.filter((c) => c.featured);
