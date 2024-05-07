import '@vue/runtime-core';
import {
  VueTailwindEditor
} from 'vue-tailwind-editor';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VueTailwindEditor: typeof VueTailwindEditor;
  }
}

export {};
