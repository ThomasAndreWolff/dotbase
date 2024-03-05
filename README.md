# Dotbase FU Challenge

Dear users, in this repository we welcome you to the third challenge of our [dotbase](dotbase.org) FU Case Study. During this challenge we encourage you to implement up to three KPI visulalisations. These visualisations help the hospital management to gain valuable insights. 

## Prerequisites
You will need [Nodejs](https://nodejs.org/en) for this project.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## UI components
For faster scaffolding of the UI, please use the installed Nuxt UI components.
You can see the list of avaible components in [their documentation](https://ui.nuxt.com/getting-started).

## Code Organization
* `components`: Add your custom UI components here
* `pages`: Add your custom views here. Most probably you will only need the `dashboard.vue` file
* `server/api`: Add your custom data models with mock data here. The API can be consumed in the views with `useFetch("/api/your-file-name")`. See the `dashboard.vue` and `observation.ts` files for reference.


## Technology used
* [Typescript](https://www.typescriptlang.org/): Language
* [Nuxt](https://nuxt.com/docs/getting-started/introduction): Vue app framework
* [Vue 3 (Composition API)](https://vuejs.org/guide/introduction.html): Frontend Library
* [Nuxt UI](https://ui.nuxt.com/getting-started): UI library for easily scaffolding project
* [TailwindCSS](https://tailwindcss.com/): Easy utility based CSS styling
