<template>
    <div class="flex items-center justify-center h-full">
    <div class="text-center text-white p-6 m-10 rounded-2xl w-full bg-black bg-opacity-50 max-w-md">
        <h1 class="text-2xl mb-2">Contact Me</h1>
        <p id="error" class="text-red-600 mb-2"></p>
        <form @submit.prevent="submitForm" class="flex flex-col">
            <div class="mb-4">
                <input v-model="name" type="text" id="name" placeholder="Name" class="bg-slate-900 border-white border-2 rounded-lg text-white w-full px-3 py-2 mt-2" />
            </div>
            <div class="mb-4">
                <input v-model="email" type="email" id="email" placeholder="Email Address" class="bg-slate-900 border-white rounded-lg border-2 text-white w-full px-3 py-2 mt-2" />
            </div>
            <div class="mb-4">
                <input v-model="subject" type="text" id="subject" placeholder="Subject" class="bg-slate-900 border-white border-2 rounded-lg text-white w-full px-3 py-2 mt-2" />
            </div>
            <textarea class="bg-slate-900 border-white border-2 rounded-lg text-white w-full px-3 py-2 mt-2" id="message" placeholder="Message" v-model="message" name="message"></textarea>
            <button type="submit" class="bg-violet-900 hover:bg-violet-700 border-white border-2 rounded-lg text-white px-6 py-2 mt-4">Send Message</button>
        </form>
    </div>
    </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { useHead } from '@vueuse/head';

  const info = "33acbebf-f081-4f5a-9f1e-cb54731ea6e4";
  const name = ref("");
  const email = ref("");
  const subject = ref("");
  const message = ref("");
  const errorMessage = ref("");

  useHead({
    title: 'Contact',
  });

  const submitForm = async () => {
    if (await checkForm()) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: info,
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        }),
      });
      const result = await response.json();
      if (result.success) {
        alert("Message Sent!");
        clearForm();
      } else {
        alert("Message failed. Try again.");
      }
    }
  };

  const clearForm = () => {
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    errorMessage.value = "";
  };

  const checkForm = () => {
    if (!name.value) {
      errorMessage.value = "Form Incomplete. Enter your name.";
      return false;
    }
    if (!email.value) {
      errorMessage.value = "Form Incomplete. Enter your email.";
      return false;
    }
    if (!subject.value) {
      errorMessage.value = "Form Incomplete. Enter a subject.";
      return false;
    }
    if (!message.value) {
      errorMessage.value = "Form Incomplete. Enter your message.";
      return false;
    }
    errorMessage.value = "";
    return true;
  };
</script>