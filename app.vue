<template>
  <div>
     <button class="button" @click="signIn">Sign in</button>
     <button class="button" @click="signOut">Sign out</button>
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

const signOut = async () => {
  const result = await signoutUser();
  console.log("result: ", result);

}

onMounted(async () => {
  /** const email = "daurena@iespabloserrano.com";
  const password = "123456";
  const credentials = await createUser(email, password);
  console.log(credentials); */
});
  
</script>