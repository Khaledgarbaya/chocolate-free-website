import React from "react";
import Helmet from "react-helmet";

function Person() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context":"https://schema.org",
          "@type":"Person",
          "url":"https://chocolate-free.com/",
          "sameAs":[
            "https://www.facebook.com/chocolatefreedotcom/",
            "https://instagram.com/chocolatefreeblog",
            "https://www.youtube.com/channel/UCAx4forqSrkq2smhZ-X5oSg",
            "https://www.pinterest.de/chocolate_free/",
            "https://twitter.com/amalnasri"
          ],
          "@id":"#person",
          "name":"Amal Nasri"
        }
        `}
      </script>
    </Helmet>
  );
}

export default Person;
