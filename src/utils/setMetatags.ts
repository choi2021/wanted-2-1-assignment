const setMetaTags = (title: string, description: string, url = '') => {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  ogTitle?.setAttribute('content', title);

  const ogDescription = document.querySelector(
    'meta[property="og:description"]'
  );
  ogDescription?.setAttribute('content', description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (url) ogUrl?.setAttribute('content', url);
};
export default setMetaTags;
