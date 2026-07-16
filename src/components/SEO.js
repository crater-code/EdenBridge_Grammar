import { Helmet } from 'react-helmet-async';

function SEO({ 
  title = "Edenbridge Grammar School - Excellence in Education",
  description = "Edenbridge Grammar School offers a values-anchored, academically rigorous education with the Exel Integrated Curriculum. Discover our Foundation, Formation, Orientation, and Direction phases for holistic student development.",
  keywords = "Edenbridge Grammar School, grammar school, education, academic excellence, Exel Integrated Curriculum, Foundation Phase, Formation Phase, Orientation Phase, Direction Phase, values-based education, holistic learning, student development",
  image = "/logo.png",
  url = "https://edenbridgegrammar.edu",
  type = "website"
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Edenbridge Grammar School",
    "description": description,
    "url": url,
    "logo": `${url}/logo.png`,
    "image": `${url}${image}`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-333-6274343",
      "contactType": "Admissions"
    },
    "sameAs": [
      "https://facebook.com/edenbridgegrammar",
      "https://instagram.com/edenbridgegrammar",
      "https://youtube.com/@edenbridgegrammar"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Edenbridge Grammar School" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:site_name" content="Edenbridge Grammar School" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export default SEO;
