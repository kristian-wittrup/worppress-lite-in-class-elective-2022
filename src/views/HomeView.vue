<template>
  <div>
    <h1>
      Front page stuff
    </h1>
    <v-card class="ma-5 pa-4" v-for="post in posts" :key="post">
      <p>Title: {{post.title}}</p>
      <p>Description: {{post.description}}</p>
      <p>QuoteNumber: {{post.quoteNumber}}</p>
      <p>PostID: {{post.id}}</p>
     
    </v-card>
  </div>
</template>

<script setup>
import { db } from '../firebase.js'
import { ref } from 'vue'

import { collection, getDocs/* , doc, deleteDoc */ } from "firebase/firestore";

const posts = ref([]) 

//Make Delete again


const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    posts.value.push({ 
    ...doc.data(), 
    id: doc.id 
  })

  //debugger


  console.log(doc.id, " => ", doc.data());
});
</script>
