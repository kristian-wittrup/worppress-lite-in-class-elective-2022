<template>
  <div>
    <h1>
      Edit page stuff
    </h1>

    <v-card class="bg-teal-lighten-5 pa-5 text-grey-darken-4">
      <h3 class="text-grey-darken-2 py-1">New post:</h3>

      <QuillEditor toolbar="full" theme="snow" v-model:content="AddItemData.description" 
      placeholder="Enter content"
      contentType="html" 
      ref="myEditor"
      />

     <!--   -->
      <v-btn class="bg-green-lighten-3" @click="firebaseAddSingleItem()">Add Dynamic Item</v-btn>
    </v-card>
    
    <v-card class="bg-amber-lighten-4 text-grey-darken-4 ma-5 pa-4" v-for="post in posts" :key="post">
      <h5>PostID: {{post.id}}</h5>
      
      <QuillEditor toolbar="full" theme="snow" v-model:content="post.description" contentType="html" />

      <v-btn class="bg-red-lighten-3" @click="firebaseDeleteSingleItem(post.id)">Delete item</v-btn>
      <v-btn class="bg-blue-lighten-3" @click="firebaseUpdateSingleItem(post.id)">Edit item (static)</v-btn>
    </v-card>
  </div>
</template>

<script setup>
//import { db } from '../firebase.js'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { onMounted } from 'vue'
import usePosts from '../modules/usePosts' 

const { 
  posts,
  myEditor,
  AddItemData, 
  getPostsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem, 
  firebaseUpdateSingleItem 
} = usePosts()



onMounted(() => {
  getPostsData()
})


</script>
