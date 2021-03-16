/* Create pages for each state */

exports.createPages = async ({ actions: { createPage } }) => {
  const states = ['ut', 'wy', 'mt', 'or'];
  const popularRivers = ['green-river', 'provo-river'];

  states.forEach((state) => {
    createPage({
      path: `/current-conditions/${state}/`,
      component: require.resolve('./src/templates/stateTemplate.js'),
      context: { state },
    });
  });

  popularRivers.forEach((river) => {
    createPage({
      path: `/current-conditions/${river}/`,
      component: require.resolve('./src/templates/riverTemplate.js'),
      context: { river },
    });
  });
};
