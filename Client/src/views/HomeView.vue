<template>
  <div class="home">
    <div
      class="h-screen"
      :style="{
        'background-image': 'url(' + require(`@/assets/hinh-nen.webp`) + ')',
      }"
    >
      <div class="content w-full h-5/6 flex items-center justify-center">
        <div>
          <div class="w-full">
            <p class="text-5xl font-bold text-center uppercase pt-12 pb-12">
              Welcome to My chat app
            </p>
          </div>
          <div class="w-full flex justify-center">
            <button
              class="uppercase border-b-4 border-green-600 text-base bg-green-primary font-semibold text-white rounded-lg py-4 mb-4 w-3/12 mx-5"
            >
              <router-link class="cursor-pointer" to="/login"
                >Sign in</router-link
              >
            </button>
            <button
              class="uppercase border-b-4 border-green-600 text-base bg-green-primary font-semibold text-white rounded-lg py-4 mb-4 w-3/12 mx-5"
            >
              <router-link class="cursor-pointer" to="/register"
                >Register</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>
