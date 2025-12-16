import React from "react";
import { Helmet } from "react-helmet";   // <-- ADD THIS
import Footer from "../components/footer";
import Home1 from "../components/Home1";
import Home2 from "../components/Home2";
import Home3 from "../components/Home3";
import Home4 from "../components/Home4";
import Home5 from "../components/Home5";

const app = () => {
  return (
    <>
<Helmet>
  {/* Canonical */}
  <link rel="canonical" href="https://allanlroberts.com/" />

  {/* Title */}
  <title>Allan Roberts | Motivational Speaker</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Allan Roberts is a motivational speaker inspiring youth with powerful stories, life lessons, and meaningful mentorship."
  />

  {/* Open Graph */}
  <meta property="og:title" content="Allan Roberts | Motivational Speaker" />
  <meta property="og:description" content="Empowering the next generation to succeed through inspiring stories and mentorship." />
  <meta property="og:image" content="https://allanlroberts.com/allan-roberts-portrait.png" />
  <meta property="og:url" content="https://allanlroberts.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Allan Roberts | Motivational Speaker" />
  <meta name="twitter:description" content="Inspiring youth through powerful stories and life guidance." />
  <meta name="twitter:image" content="https://allanlroberts.com/allan-roberts-portrait.png" />

  <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://allanlroberts.com/"
    }
  ]
}
`}
</script>

</Helmet>


      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Footer />
    </>
  );
};

export default app;
