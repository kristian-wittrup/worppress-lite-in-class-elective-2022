<template>
  <div>
    <v-btn
    id="floatyClose" 
    rounded="0" 
    size="large"
    color="warning" 
    class="bg-yellow-lighten-3 pa-3 my-1" 
    @click="$emit('close')"><v-icon>mdi-close</v-icon></v-btn>
    
    <v-card class="my-5 pa-5 bg-white rounded" elevation="1">

      <QuillEditor 
        toolbar="full" 
        theme="snow" 
        v-model:content="AddItemData.description" 
        placeholder="Enter content"
        contentType="html" 
        ref="myEditor"
      />
      <v-row>
        <v-col>
          <v-btn class="bg-green-lighten-3" @click="firebaseAddSingleItem(description)">Add Dynamic Item</v-btn>
        </v-col>
      </v-row>
      
    </v-card>

  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from 'vue'

import usePosts from '../modules/usePosts'

const { firebaseAddSingleItem, myEditor, AddItemData } = usePosts()
const description = ref('')

</script>

<style lang="scss" scoped>

</style>