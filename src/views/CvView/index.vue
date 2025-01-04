<script setup lang="ts">
import example from '@/templates/example.md?raw'

const content = ref(example)
</script>

<template>
  <div class="cv-container">
    <section class="editor">
      <MonacoEditor v-model="content" />
    </section>

    <section class="line"></section>

    <section class="preview">
      <MarkdownRender v-model="content" />
    </section>
  </div>
</template>

<style lang="scss">
.cv-container {
  display: flex;
  height: 100vh;
}

.editor {
  flex: 1;
  overflow: hidden;
  height: inherit;

  .monaco-editor-container {
    height: inherit;
  }
}

.line {
  margin: 0 8px;
  width: 1px;
  background-color: #ccc;
}

.preview {
  flex: 1;
  overflow: hidden;
  height: inherit;
  overflow: overlay;
}

@media print {
  .editor,
  .line {
    display: none;
  }

  .preview {
    overflow: visible;
  }

  @page {
    size: A4;
    margin: 1cm;
  }
}
</style>
