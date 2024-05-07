<div align="center">

![Captura de tela de 2024-05-07 13-31-32](https://github.com/cn-2k/vue-tailwind-wysiwyg-editor/assets/59366705/8d588712-5a4c-4796-9606-1737ffd6931a)

</div>

<h1 align=center>📝 Vue Tailwind WYSIWYG Editor</h1>
<p align=center>A WYSIWYG Editor component styled with TailwindCSS for Vue 3 (Typescript included!).</p>

## 📺 Demo

https://vue-tailwind-editor-demo.vercel.app/

## Requirements

1. [TailwindCSS](https://tailwindcss.com/docs/installation)
2. [TailwindCSS Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)

You need to have those dependencies installed in your project in order to everything works great ;)

## 🚀 Installation

1. Install using your package manager of choice:

```bash
npm i vue-tailwind-wysiwyg-editor
```

2. Add the source files of Vue Tailwind WYSIWYG Editor to the ```tailwind.config.js``` template path:

```js
module.exports = {
  content: [
    // other files...
    './node_modules/vue-tailwind-wysiwyg-editor/**/*.{js,ts,vue}',
  ],
}
```

## ⚙️ Usage

Import the component locally or define it globally:

```vue
<template>
  <div class="flex flex-col items-center justify-center w-full h-screen gap-4">
    <VueTailwindEditor @get-html="updateHtml" />
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { VueTailwindEditor } from 'vue-tailwind-wysiwyg-editor';
import 'vue-tailwind-wysiwyg-editor/dist/style.css' // need to import the style file
const html = ref<string>("")

const updateHtml = (val: string) => {
  html.value = val;
};
</script>
```

## 📃 Props

| Prop              | Type     | Default Value          | Required | Description                                                  |
|-------------------|----------|------------------------|----------|--------------------------------------------------------------|
| `height`          | String   | `'400'`                | No       | Sets the height of the editor in pixels.                     |
| `width`           | String   | `'700'`                | No       | Sets the width of the editor in pixels.                      |
| `editorBackground`| String   | None                   | No       | Sets the background color of the editor.                     |
| `placeholder`     | String   | Write something...                   | No       | Sets the placeholder text displayed when the editor is empty.|
| `keys`            | Object   | `defaultTranslations`  | No       | An object to customize the titles of the toolbar buttons.    |

The `defaultTranslations` object provides default English-language titles for each of the toolbar buttons. The `keys` object allows you to easily customize the button labels to match your application's language or user preferences.

You can override any of these values by passing your own keys prop to the `VueTailwindEditor` component. For example, if you want to change the label for the 'bold' button to 'Negrito' in Portuguese, you would pass a keys object like this:

```vue
<VueTailwindEditor :keys="{ bold: 'Negrito' }" />
```

## ✨ Events

| Event      | Payload Type | Description                                                  |
|------------|--------------|--------------------------------------------------------------|
| `@get-html`| String       | Emitted whenever the content of the editor changes. It provides the updated HTML content of the editor as a payload to the event listener. |

The `@get-html` event is a key feature of the `VueTailwindEditor` component. This event is triggered every time there is a change in the content of the editor. When this event occurs, the updated HTML content of the editor is passed as a payload to the event listener function.
