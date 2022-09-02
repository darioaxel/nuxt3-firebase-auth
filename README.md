# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


# Adding VUETIFY 3 BETA


Now that our Nuxt 3 project is setup, we are ready to integrate Vuetify. While you are in the nuxt application's root directory, run the following command to install Vuetify 3 and it's dependency, sass.

```yarn add vuetify@next sass```

Your package.json should now look similar to the following:
```javascript
// package.json
"devDependencies": {
  "nuxt": "3.0.0-rc.1"
},
"dependencies": {
  "sass": "^1.51.0",
  "vuetify": "^3.0.0-beta.XXXX"
}
```
## Creating our Vuetify plugin
We have Vuetify installed, now we need it to talk to Nuxt. We will do this by using Nuxt's plugin (opens new window)feature.

Create a plugins folder then create a file named vuetify.js and put it in the newly created plugins folder.

Then, within the vuetify.js file, paste the following code into it:
```javascript
// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})
```

This is mostly documented here (opens new window)within Vuetify's explanation. The key difference is we use nuxtApp.vueApp.use(vuetify) rather than app.use(vuetify).

#Configure Nuxt 3 to use our new plugin
Our last bit of configuration occurs in our nuxt.config.ts file. This is where we tell Nuxt how to properly find and build Vuetify's sass.
```javascript
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
```