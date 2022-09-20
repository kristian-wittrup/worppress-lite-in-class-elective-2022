import { db } from '../firebase.js'
import { ref } from 'vue'
import { collection, onSnapshot, doc , deleteDoc, addDoc, updateDoc  } from "firebase/firestore";

const usePosts = () => {
  
  const posts = ref([]) 
  const postDataRef = collection(db, "posts")

  const AddItemData = ref({description:null})

  const myEditor = ref('') // Using this, to update VueQuill content, when we clear it

  // Grab data from firebase (realtime)
  const getPostsData = () => {
    onSnapshot(postDataRef, (snapshot) => {
      posts.value = snapshot.docs.map(doc => {
       // console.log("is it reaching this step")
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
    //  title: AddItemData.value.addPostTitle,
    //  quoteNumber: AddItemData.value.addPostQuoteNumber
      description: AddItemData.value.description,
    }
    ).then(() => {
      myEditor.value.setContents('') // Using a bound ref="myEditor", to clear and update the vueQuill
     
    })
  }

  // UpdateDoc with .find() method. 
  const firebaseUpdateSingleItem = async(id) => {
    await updateDoc(doc(postDataRef, id), {
      title: posts.value.find(post => post.id === id).title,
      description: posts.value.find(post => post.id === id).description,
      quoteNumber: posts.value.find(post => post.id === id).quoteNumber
    });
   // debugger
  }

  // Alternate way: Using the v-for loop and the attached post.id to track which object we change
  // This will work fine when using a Loop

  // const updatePost = async (post) => {
  //   await updateDoc(doc(postDataRef, post.id), {
    //   title: post.title,
    //   description: post.description,
    //   quoteNumber : post.quoteNumber    
  //   });
  // };
  


  //Make Delete   #4.1
  const firebaseDeleteSingleItem = async(id) => {
    //debugger
    await deleteDoc(doc(db, "posts", id))  // make it a reference instead
    //console.log("is deleted", id)
  }

 

  return {
    posts,
    AddItemData,
    myEditor,
    getPostsData,
    firebaseDeleteSingleItem,
    firebaseAddSingleItem,
    firebaseUpdateSingleItem,
    
  }
}

export default usePosts