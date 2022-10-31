import React from "react";
import { Script } from "gatsby";

const SHORTNAME = "chocolate-free";
const WEBSITE_URL = "https://chocolate-free.com";
const DisqusThread = ({ id, title, path }) => {
  return (
    <>
      <Script
        src={`https://${SHORTNAME}.disqus.com/embed.js`}
        onLoad={() => {
          window.disqus_shortname = SHORTNAME;
          window.disqus_identifier = id;
          window.disqus_title = title;
          window.disqus_url = WEBSITE_URL + path;
        }}
      />
      <div id="disqus_thread"></div>
    </>
  );
};
export default DisqusThread;
