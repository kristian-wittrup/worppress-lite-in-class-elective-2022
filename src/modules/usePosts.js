import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, onSnapshot, doc , deleteDoc, addDoc, updateDoc  } from "firebase/firestore";

const usePosts = () => {
  
  const posts = ref([]) 
  const postDataRef = collection(db, "posts");

  // Grab data from firebase (realtime)
  const getPostsData = () => {
    onSnapshot(postDataRef, (snapshot) => {
      posts.value = snapshot.docs.map(doc => {
        console.log("is it reaching this step")
        return {
          ...doc.data(),
          id: doc.id
        }
      })
    })
  }

  // Add static data to Firebase
  const firebaseAddSingleItem = async() => {
    await addDoc(collection(db, "posts"), {
      title: "Test Title",
      description: "Test Description",
      quoteNumber: 1
    })
  }

  // UpdateDoc
  const firebaseUpdateSingleItem = async(id) => {
    await updateDoc(doc(postDataRef, id), {
      title: "Updated Title",
      description: "Updated Description",
      quoteNumber: 42
    });
   // debugger
  }


  //Make Delete again
  const firebaseDeleteSingleItem = async(id) => {
    //debugger
    await deleteDoc(doc(db, "posts", id))  // make it a reference instead
    //console.log("is deleted", id)
  }

 

  return {
    posts,
    getPostsData,
    firebaseDeleteSingleItem,
    firebaseAddSingleItem,
    firebaseUpdateSingleItem
  }
}

export default usePosts