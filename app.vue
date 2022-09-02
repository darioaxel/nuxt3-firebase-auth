<template>
  <div>
     <button class="button">Click Me</button>
  </div>
</template>
<script setup>
console.log("-- APP --");

const signIn = async () => {
  const email ="darioaxel@gmail.com"
  const password ="123456"

  const credentials = await signInUser(email, password);
  console.log("Credentials: ", credentials);

}

onMounted(async () => {
 
});
  
</script>