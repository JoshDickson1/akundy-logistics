import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Akundy Logistics'
const BASE_URL = 'https://akundylogistics.com'
const DEFAULT_IMAGE = `${BASE_URL}/logo-light.png`

interface SEOProps {
  title: string
  description: string
  path?: string
  ogImage?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function SEO({
  title,
  description,
  path = '',
  ogImage = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const canonical = `${BASE_URL}${path}`
  const image = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
