<script setup lang="ts">
// https://marked.js.org
import { marked } from 'marked'

defineOptions({
  name: 'MarkdownRender',
})

const MarkdownRender = ref(null)

const { modelValue = '', theme = 'default' } = defineProps<{
  modelValue?: string
  theme?: 'default'
}>()

const emit = defineEmits(['update:modelValue'])

const content = computed(() => marked.parse(unref(modelValue)))
</script>

<template>
  <div class="markdown-render" :class="[theme]" ref="MarkdownRender" v-html="content"></div>
</template>
