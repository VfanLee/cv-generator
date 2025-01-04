<script setup lang="ts">
// https://microsoft.github.io/monaco-editor/docs.html
import * as monaco from 'monaco-editor'
import type { editor as MonacoEditor } from 'monaco-editor'
import defaultOptions, { type EditorOptions } from './config'

defineOptions({
  name: 'MonacoEditor',
})

const editorRef = ref<HTMLElement | null>(null)
let editor: MonacoEditor.IStandaloneCodeEditor | null = null

const { modelValue = '', options = {} } = defineProps<{
  modelValue?: string
  options?: EditorOptions
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

onMounted(() => {
  if (editorRef.value) {
    editor = monaco.editor.create(editorRef.value, {
      value: modelValue,
      ...defaultOptions,
      ...options,
    })

    editor.onDidChangeModelContent(() => {
      const content = editor?.getModel()?.getValue() || ''
      emit('update:modelValue', content)
    })

    window.addEventListener('resize', () => {
      if (editor) {
        editor.layout()
      }
    })
  }
})
</script>

<template>
  <div class="monaco-editor-container">
    <div class="monaco-editor" ref="editorRef"></div>
  </div>
</template>

<style lang="scss" scoped>
.monaco-editor {
  height: inherit;
  width: 100%;
}
</style>
