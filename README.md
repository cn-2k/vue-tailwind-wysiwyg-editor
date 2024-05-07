<div align="center">

![ezgif-2-e81342282f](https://github.com/cn-2k/vue-tailwind-lightbox/assets/59366705/f6b3f948-2d8a-4886-bb8d-b8b6c786bab0)


</div>

<h1 align=center>Vue Tailwind Lightbox ✨</h1>
<p align=center>A Gallery/Lightbox component styled with TailwindCSS for Vue 3 (Typescript included!).</p>
<p align=center>Based on <a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6" target="_blank">Frontend Mentor E-commerce product page</a> Lightbox.</p>

## 📺 Demo

https://vue-tailwind-lightbox-demo.vercel.app/

## 🚀 Installation

1. Install using your package manager of choice:

```bash
npm i vue-tailwind-lightbox
```

2. Add the source files of Nuxt Tailwind Lightbox to the ```tailwind.config.js``` template path:

```js
module.exports = {
  content: [
    // other files...
    './node_modules/vue-tailwind-lightbox/**/*.{js,ts,vue}',
  ],
}
```

## ⚙️ Usage

Import the component locally or define it globally:

```vue
<template>
  <vue-tailwind-lightbox :image-list="imageList" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueTailwindLightbox } from 'vue-tailwind-lightbox'
import "vue-tailwind-lightbox/dist/style.css"; // Import CSS needed!

import image1 from '@/assets/images/image-product-1.jpg'
import image2 from '@/assets/images/image-product-2.jpg'
import image3 from '@/assets/images/image-product-3.jpg'
import image4 from '@/assets/images/image-product-4.jpg'

const imageList = ref([image1, image2, image3, image4])
</script>
```

<strong>Note:</strong> don't worry about the thumbnails images, they are automatically compressed to improve and maintain performance! 😉

## 📃 Props

| Name       | Type               | Default | Description                        |
| ---------- | ------------------ | ------- | ---------------------------------- |
| `image-list` | `Array`          |   ---   | Array of images to fill the gallery |
