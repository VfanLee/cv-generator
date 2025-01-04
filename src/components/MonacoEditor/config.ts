import type { editor } from 'monaco-editor'

type EditorOptions = editor.IStandaloneEditorConstructionOptions

const defaultOptions: EditorOptions = {
  // 编辑器基础设置
  fontSize: 14,
  tabSize: 2,
  insertSpaces: true,
  detectIndentation: true,

  // 显示设置
  theme: 'vs',
  language: 'markdown',
  lineNumbers: 'off',
  contextmenu: false,
  wordWrap: 'on',

  // 功能设置
  minimap: {
    enabled: false,
  },
}

export type { EditorOptions }
export default defaultOptions
