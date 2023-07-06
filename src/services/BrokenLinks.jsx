import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BrokenLinks = ({ url }) => {
  const [brokenLinks, setBrokenLinks] = useState([]);

  useEffect(() => {
    const checkLinks = async () => {
      try {
        const response = await axios.get(url);
        const html = response.data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const links = doc.querySelectorAll('a');
        const promises = [];

        links.forEach((link) => {
          const href = link.getAttribute('href');
          if (href && href !== '#') {
            promises.push(checkLinkStatus(url, href));
          }
        });

        const results = await Promise.all(promises);

        const brokenLinks = results.filter((result) => result.status !== 200);
        setBrokenLinks(brokenLinks);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    checkLinks();
  }, [url]);

  const checkLinkStatus = async (baseUrl, link) => {
    try {
      const resolvedUrl = link.startsWith('/') ? baseUrl + link : link;
      const response = await axios.head(resolvedUrl);
      const status = response.status;
      return { link: resolvedUrl, status };
    } catch (error) {
      console.error('Error:', error);
      return { link, status: 'Error' };
    }
  };

  return (
    <div>
      <h1>Broken Links</h1>
      {brokenLinks.map((link, index) => (
        <div key={index}>
          <p>URL: {link.link}</p>
          <p>Status: {link.status}</p>
        </div>
      ))}
    </div>
  );
};

export default BrokenLinks;
