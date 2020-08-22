const passthroughCopyItems = [
  'css',
  'img',
  'manifest.json',
  'sitemap.xml',
  'umang_galaiya_resume.pdf',
];

module.exports = config => {

  // Copy /css to /site/css and other items
  passthroughCopyItems.forEach(item => config.addPassthroughCopy(item));

  config.addFilter('concat', function (a, b) {
    return a.concat(b);
  });

  config.addFilter('allButPage', function (allPages, pageToOmit) {
    return allPages.filter(page => page.url !== pageToOmit.url);
  })

  config.addCollection('pages', collectionApi => {
    return collectionApi.getFilteredByGlob('src/*.html')
      .sort((a, b) => {
        if (a.data.navOrder < b.data.navOrder) {
          return -1;
        } else {
          return 1;
        }
      });
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    dir: {
      input: 'src',
      output: 'site',
    },
  }
};