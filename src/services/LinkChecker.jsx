import React, { useEffect, useState } from 'react';

const LinkChecker = ({ url }) => {
  const [linkData, setLinkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const anchors = doc.querySelectorAll('a');

        const data = [];
        anchors.forEach(anchor => {
          const href = anchor.getAttribute('href');
          const type = getLinkType(href);
          const absoluteUrl = getAbsoluteUrl(url, href);
          const status = checkLinkStatus(absoluteUrl);

          data.push({
            pageUrl: url,
            linkUrl: absoluteUrl,
            status,
            type
          });
        });

        setLinkData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [url]);

  const getLinkType = href => {
    if (href.startsWith('tel:')) {
      return 'tel';
    } else if (href.startsWith('mailto:')) {
      return 'mailto';
    } else if (href.startsWith('#')) {
      return 'anchor';
    } else if (href.startsWith('http://') || href.startsWith('https://')) {
      return 'external';
    } else {
      return 'internal';
    }
  };

  const getAbsoluteUrl = (baseUrl, href) => {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return href;
    } else if (href.startsWith('/')) {
      const urlObj = new URL(baseUrl);
      return urlObj.origin + href;
    } else {
      const urlObj = new URL(baseUrl);
      const path = urlObj.pathname.endsWith('/') ? urlObj.pathname : `${urlObj.pathname}/`;
      return urlObj.origin + path + href;
    }
  };

  const checkLinkStatus = async url => {
    try {
      const response = await fetch(url);
      return response.status;
    } catch (error) {
      console.error('Error:', error);
      return 'error';
    }
  };

  return (
    <div className='pt-5'>
      <h2>Links do site</h2>
      <table className='table table-hover table-bordered table-striped'>
        <tr className='text-center'>
            <th>Pagina</th>
            <th>Link</th>
            <th>Status</th>
            <th>Tipo</th>
        </tr>
        {linkData.map((link, index) => (
          <tr key={index}>
            <td>{link.pageUrl}</td>
            <td>{link.linkUrl}</td>
            <td>{link.status}</td>
            <td>{link.type}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LinkChecker;
