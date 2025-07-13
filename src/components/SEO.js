import Head from 'next/head';

const SEO = ({ 
  title = "Студія повітряної гімнастики Катерини | Київ",
  description = "Професійні заняття повітряної гімнастики в Києві з тренером Катериною. Групи для дітей та дорослих. Запис: 067-705-15-20",
  keywords = "повітряна гімнастика, aerial, заняття гімнастикою, фітнес Київ, тренер Катерина, групові заняття, індивідуальні тренування",
  image = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  url = "https://aerial-gymnastics-studio.vercel.app",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Студія повітряної гімнастики Катерини",
    "description": description,
    "url": url,
    "telephone": "+380677051520",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "бульв. Миколи Руденка, 12, ТЦ Дніпро",
      "addressLocality": "Київ",
      "addressCountry": "UA"
    },
    "instructor": {
      "@type": "Person",
      "name": "Катерина Демиденко",
      "sameAs": "https://www.instagram.com/kateryna__demydenko"
    },
    "sport": "Повітряна гімнастика",
    "priceRange": "$$",
    "image": image,
    "sameAs": [
      "https://www.instagram.com/kateryna__demydenko",
      "https://t.me/kateryna_demydenko"
    ]
  };

  return (
    <Head>
      {/* Основні мета-теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Катерина Демиденко" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="uk" />
      <link rel="canonical" href={url} />

      {/* Open Graph теги */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Студія повітряної гімнастики Катерини" />
      <meta property="og:locale" content="uk_UA" />

      {/* Twitter Card теги */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Додаткові мета-теги */}
      <meta name="theme-color" content="#e74c3c" />
      <meta name="msapplication-TileColor" content="#e74c3c" />
      
      {/* Структуровані дані */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  );
};

export default SEO; 