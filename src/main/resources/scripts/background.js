console.log('background.js loaded');
browser.composeScripts.register({
  css: [],
  js: [{'file': '../scripts/compose.js'}]
});
