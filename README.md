# sql-editor-demo

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Framework/Libraries
Base framework is NuxtJS + TailwindCSS/TailwindUI + ElementUI

## Layout & Feature Set
- Overall layout is similar to Azure Data Studio. Different parts of layout are built using Flex/Grid to make them snap smoothly in UI
- Features in UI:
+ Connections: Make connections to data servers
    + New query file *
    + Run query *
    + See query results *
    + Export query results as CSV, Excel, JSON
+ Search: Search text in files
+ Notebooks: Group files in Notebooks
+ Explorer: Browse opened files
+ Source Control: with git
+ Accounts
+ Settings
+ Status Bar: show different information like current branch, notifications, errors/warnings

*: working functionality

## Page Load Time
- Overall code splitting is done by NuxtJS
- Further improvement made by compressing build files with `nuxt-compress` and `shrink-ray-current`
- Code optimization by using as least libraries as possible and fetch data only when neccessary
- Further consideration in this particular demo:
+ Currently each query editor is rendered with its own separate editor component. This makes the dom quite big and probably can cause flickering with more complex UI in the future. 
+ Therefore another approach is 1 single editor component for all query tabs. Each tab will have its own data and encapsulated into a model. This tab object is passed as a prop to the editor component. Mutation can be emitted back to outside model for storing
- I am calculating Page Load Time as a full request; including css, js; to the site without any XHR. On my comp, the site hosted on Firebase takes around 500ms with "Disable Cache" checked.