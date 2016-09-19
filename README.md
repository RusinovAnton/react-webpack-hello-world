# REACT-REDUX-WEBPACK-IMMUTABLE HELLO WORLD
*Features*:
- babel with ES6/ES7 and react plugins;
- eslint config including useful react/jsx rules;
- dev/prod webpack builds with handy plugins included and clear config structure :grin:;
- bonus: react-bootstrap with custom components
  
## Immutable data
I'm using [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) for immutable data purposes
  
## Webpack
Webpack folder has three files:
- config.js - common configurations;
- entry.js - bundle declarations;
- plugins.js - plugins declarations / configurations;
webpack.config.js itself has dev/prod specific includes of loaders, plugins, etc
Build scripts:
- `npm run build-app` - build dev mode app;
- `npm run build-app --production` - build prod app;
- `npm start` - run webpack-dev-server;
- `npm watch-app` - to run webpack watch only;

## Release notes
1.0.0 - initial
  
## Roadmap
- Add jest tests mockups and configs;
- Clear up npm scripts;
- Docs for common components and utils;
