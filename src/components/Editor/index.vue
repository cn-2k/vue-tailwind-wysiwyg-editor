<template>
  <div :style="`background-color:${editorBackground}; height:${props.height}px; width:${props.width}px;`"
    class="w-full h-full overflow-hidden bg-white rounded-md ring-1 ring-gray-300">

    <div class="sticky top-0 z-10 bg-white">
      <Toolbar>
        <template v-for="(item, index) in items">
          <div v-if="item.type === 'divider'" class="my-1.5 border border-gray-200" />
          <ButtonTemplate @click="item.action" :is-active="item.isActive" :icon="item.icon" size="30"
            :title="item.title" v-if="item.type === 'button'" :key="index" />
        </template>
      </Toolbar>

      <hr class="w-full h-[1px]">
    </div>

    <div class="overflow-y-auto" :style="{ height: 'calc(100% - 46px)' }"><editor-content :editor="editor" /></div>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "./Toolbar/index.vue";
import ButtonTemplate from "./Buttons/ButtonTemplate.vue";
import { onBeforeUnmount, watchEffect, type Component } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'

import * as icons from './Icons/icons';

const props = withDefaults(defineProps<{
  height: string,
  width: string,
  editorBackground?: string,
  placeholder?: string,
  keys?: Partial<ITranslationsProps>,
}>(), {
  width: '700',
  height: '400',
  //@ts-ignore
  keys: defaultTranslations,
})

const emit = defineEmits<{
  (e: 'getHtml', html: string): void
}>()

const editor = useEditor({
  extensions: [
    StarterKit.configure({
      document: false,
    }),
    Underline,
    Document,
    Placeholder.configure({
      placeholder: props.placeholder ? props.placeholder : "Write something...",
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    TaskList,
    TaskItem,
  ],
  editorProps: {
    attributes: {
      class: "px-4 mt-4 outline-none border-none prose text-black max-w-none prose-headings:mt-4 prose-p:my-1",
    },
  },
  editable: true,
});

type MenuItem = {
  icon: Component
  title: string | undefined
  action: () => void
  type: 'button'
  isActive?: () => boolean | undefined
} | { type: 'divider' };

const items: MenuItem[] = [
  {
    type: 'button',
    icon: icons.BoldIcon,
    title: props.keys.bold,
    action: () => editor.value?.chain().focus().toggleBold().run(),
    isActive: () => editor.value?.isActive('bold'),
  },
  {
    type: 'button',
    icon: icons.ItalicIcon,
    title: props.keys.italic,
    action: () => editor.value?.chain().focus().toggleItalic().run(),
    isActive: () => editor.value?.isActive('italic'),
  },
  {
    type: 'button',
    icon: icons.UnderlineIcon,
    title: props.keys.underline,
    action: () => editor.value?.chain().focus().toggleUnderline().run(),
    isActive: () => editor.value?.isActive('underline'),
  },
  {
    type: 'button',
    icon: icons.Strike,
    title: props.keys.strike,
    action: () => editor.value?.chain().focus().toggleStrike().run(),
    isActive: () => editor.value?.isActive('strike'),
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    icon: icons.H1Icon,
    title: props.keys.header1,
    action: () => editor.value?.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: () => editor.value?.isActive('heading', { level: 1 }),
  },
  {
    type: 'button',
    icon: icons.H2Icon,
    title: props.keys.header2,
    action: () => editor.value?.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: () => editor.value?.isActive('heading', { level: 2 }),
  },
  {
    type: 'button',
    icon: icons.H3Icon,
    title: props.keys.header3,
    action: () => editor.value?.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: () => editor.value?.isActive('heading', { level: 3 }),
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    icon: icons.BulletListIcon,
    title: props.keys.unorderedList,
    action: () => editor.value?.chain().focus().toggleBulletList().run(),
    isActive: () => editor.value?.isActive('bulletList'),
  },
  {
    type: 'button',
    icon: icons.OrderedListIcon,
    title: props.keys.orderedList,
    action: () => editor.value?.chain().focus().toggleOrderedList().run(),
    isActive: () => editor.value?.isActive('orderedList'),
  },
  {
    type: 'button',
    icon: icons.CheckListIcon,
    title: props.keys.checklist,
    action: () => editor.value?.chain().focus().toggleTaskList().run(),
    isActive: () => editor.value?.isActive('taskList'),
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    icon: icons.TextLeftIcon,
    title: props.keys.alignLeft,
    action: () => editor.value?.chain().focus().setTextAlign("left").run(),
  },
  {
    type: 'button',
    icon: icons.TextCenterIcon,
    title: props.keys.center,
    action: () => editor.value?.chain().focus().setTextAlign("center").run(),
  },
  {
    type: 'button',
    icon: icons.TextRightIcon,
    title: props.keys.alignRight,
    action: () => editor.value?.chain().focus().setTextAlign("right").run(),
  },
  {
    type: 'divider',
  },
  {
    type: 'button',
    icon: icons.UndoIcon,
    title: props.keys.undo,
    action: () => editor.value?.chain().focus().undo().run(),
  },
  {
    type: 'button',
    icon: icons.RedoIcon,
    title: props.keys.redo,
    action: () => editor.value?.chain().focus().redo().run(),
  },
];

watchEffect(() => {
  if (editor.value) {
    emit("getHtml", editor.value.getHTML());
  }
});

onBeforeUnmount(() => {
  editor.value?.destroy();
})
</script>

<script lang="ts">
interface ITranslationsProps {
  bold: string;
  italic: string;
  underline: string;
  strike: string;
  header1: string;
  header2: string;
  header3: string;
  unorderedList: string;
  orderedList: string;
  checklist: string;
  alignLeft: string;
  center: string;
  alignRight: string;
  undo: string;
  redo: string;
}

const defaultTranslations: ITranslationsProps = {
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  strike: 'Strike',
  header1: 'Header 1',
  header2: 'Header 2',
  header3: 'Header 3',
  unorderedList: 'Bullet List',
  orderedList: 'Ordered List',
  checklist: 'Checklist',
  alignLeft: 'Align left',
  center: 'Align Center',
  alignRight: 'Align right',
  undo: 'Undo',
  redo: 'Redo',
};
</script>

<style lang="css">
.tiptap p.is-editor-empty:first-child:before {
  content: attr(data-placeholder);
  float: left;
  font-size: 1rem;
  color: #b0b0b0;
  pointer-events: none;
  height: 0
}

.ProseMirror ul[data-type=taskList] {
  list-style: none;
  line-height: 14px;
  padding: 0;
  margin-top: 20px;
}

.ProseMirror ul[data-type=taskList] li {
  display: flex;
  align-items: center
}

.ProseMirror ul[data-type=taskList] li>label {
  flex: 0 0 auto;
  margin-right: 0.6rem;
}

.ProseMirror input[type=checkbox] {
  cursor: pointer
}
</style>
