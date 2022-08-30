<template>
  <div>
    <h1>
      Front page stuff
    </h1>
    <v-form>
      
      <v-text-field
            color="secondary"
            label="Title"
            variant="solo"
            placeholder="Enter a title"
            v-model="addPostInfo"
          ></v-text-field>

    </v-form>
    <v-btn @click="firebaseAddSingleItem()">Add Static Item</v-btn>

    <v-card class="ma-5 pa-4" v-for="post in posts" :key="post">
      <p>Title: {{post.title}}</p>
      <p>Description: {{post.description}}</p>
      <p>QuoteNumber: {{post.quoteNumber}}</p>
      <p>PostID: {{post.id}}</p>
      <v-btn @click="firebaseDeleteSingleItem(post.id)">Delete item</v-btn>
      <v-btn @click="firebaseUpdateSingleItem(post.id)">Edit item (static)</v-btn>
    </v-card>
  </div>
</template>

<script setup>
//import { db } from '../firebase.js'
import { onMounted, ref } from 'vue'
import usePosts from '../modules/usePosts' 


let addPostInfo = ref('')


//import {  /* getDocs, */ doc , deleteDoc } from "firebase/firestore";
// const posts = ref([]) 
const { 
  posts, 
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
