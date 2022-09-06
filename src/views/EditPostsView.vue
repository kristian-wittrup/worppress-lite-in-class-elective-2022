<template>
  <div>
    <h1>
      Edit page stuff
    </h1>

    <v-card class="bg-teal-lighten-5 pa-5 text-grey-darken-4">
      <h3 class="text-grey-darken-2 py-1">New post:</h3>

      <QuillEditor toolbar="full" theme="snow" v-model:content="AddItemData.description" 
      placeholder="Enter content"
      contentType="html" />

     <!--   -->
      <v-btn @click="firebaseAddSingleItem()">Add Dynamic Item</v-btn>
    </v-card>
    
    <v-card class="bg-amber-lighten-4 text-grey-darken-4 ma-5 pa-4" v-for="post in posts" :key="post">
      <h5>PostID: {{post.id}}</h5>
      
      <QuillEditor toolbar="full" theme="snow" v-model:content="post.description" contentType="html" />

      <v-btn @click="firebaseDeleteSingleItem(post.id)">Delete item</v-btn>
      <v-btn @click="firebaseUpdateSingleItem(post.id)">Edit item (static)</v-btn>
    </v-card>
  </div>
</template>

<script setup>
//import { db } from '../firebase.js'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { onMounted } from 'vue'
import usePosts from '../modules/usePosts' 



//import {  /* getDocs, */ doc , deleteDoc } from "firebase/firestore";
// const posts = ref([]) 
const { 
  posts,
  AddItemData, 
  getPostsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem, 
  firebaseUpdateSingleItem 
} = usePosts()



onMounted(() => {
  getPostsData()
})


// const querySnapshot = await getDocs(collection(db, "posts"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//     posts.value.push({ 
//     ...doc.data(), 
//     id: doc.id 
//   })

//   //debugger


//   console.log(doc.id, " => ", doc.data());
// });
</script>
