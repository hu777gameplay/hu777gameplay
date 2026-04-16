import HomeController from "./home.controller";

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HU777 Games",
    url: "https://www.hu777gameplay.com",
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HomeController />
    </>
  );
};

export default Home;
