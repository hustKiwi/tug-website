export const handleRedirect = (router, link, browserLink, target) => {
  if (!link) return;

  // if `link` has a schema, `browserLink` will be ignored
  if (link.startsWith('http')) {
    return window.open(link, target || '_blank').focus();
  }

  // `browserLink` (`as`) is an optional decorator for the URL that will be shown in the browser.
  // Please check the following example for how it works:
  // https://nextjs.org/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes
  router.push(link, browserLink);
};
