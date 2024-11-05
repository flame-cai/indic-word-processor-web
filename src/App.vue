<script setup>
import Editor from 'primevue/editor'
</script>

<template>
  <header>
    <nav><h1>Indic Word Processor</h1></nav>
  </header>
  <Editor>
    <template v-slot:toolbar>
      <span class="ql-formats">
        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
      </span>
    </template>
  </Editor>
</template>

<style>
header {
  margin-bottom: 1em;
}

.p-editor {
  height: 90%;
}
</style>
