## Create a project (vite-react)

```sh
npm create vite@latest
```

## Install tailwindcss & postcss

```sh
yarn add -D tailwindcss postcss autoprefixer
```

## Init tailwindcss

```sh
npx tailwindcss init
```

## Create postcss.config.js file

```sh
touch postcss.config.js
```

add this script into `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

update the script in `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

add tailwind declarative into your css file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Start your dev project

```sh
yarn dev
```
