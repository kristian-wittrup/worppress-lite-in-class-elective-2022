<template>
  <div>
    <h1>
      Front page stuff
    </h1>

    <v-card class="ma-5 pa-4" v-for="post in posts" :key="post">

      <p v-html="post.description"></p>
    
      <p>PostID: {{post.id}}</p>

    </v-card>
  </div>
</template>

<script setup>
//import { db } from '../firebase.js'
import { onMounted } from 'vue'
import usePosts from '../modules/usePosts' 

//import {  /* getDocs, */ doc , deleteDoc } from "firebase/firestore";
// const posts = ref([]) 
const { 
  posts,
  getPostsData, 
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
