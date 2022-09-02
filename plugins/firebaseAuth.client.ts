import { initializeApp }  from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp

    const config = useRuntimeConfig();
    const firebaseConfig = {
        apiKey: config.apiFirebaseSecret,
    };

const app = initializeApp(firebaseConfig);

})