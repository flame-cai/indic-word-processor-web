<script setup>
import Textarea from 'primevue/textarea'

import { computed, ref } from 'vue';
import Sanscript from '@indic-transliteration/sanscript';
const text = ref('')
const transliterated_text = computed(() => {
  return Sanscript.t(text.value, 'hk', 'devanagari')
})
</script>

<template>
    <Textarea v-model="text"></Textarea>
    <Textarea v-model="transliterated_text" readonly></Textarea>
</template>

<style>
.p-textarea {
  resize: none;
  display: block;
  height: 40%;
  margin-bottom: 1em;
  width: 100%
}

</style>