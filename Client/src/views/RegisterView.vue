<template>
  <div role="main">
    <div
      class="container h-screen mx-auto flex"
      :style="{
        'background-image':
          'url(' + require(`@/assets/bg-intro-desktop.png`) + ')',
      }"
    >
      <div class="my-auto w-full grid md:grid-cols-2 grid-cols-1 sm:p-16">
        <div class="flex text-white p-auto mb-12 px-8 text-center">
          <div class="m-auto">
            <h1
              class="text-xl text-center sm:text-left sm:text-5xl py-8 font-extrabold"
            >
              My chat
            </h1>
            <p
              class="text-sm text-center sm:text-left sm:text-base font-base sm:font-semibold"
            >
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials isn't right, but understanding how
              developers think is invaluable.
            </p>
          </div>
        </div>
        <div class="px-8 mb-8">
          <div
            class="rounded-lg bg-white p-5 sm:p-10 border-b-4 border-red-primary-translucent"
          >
            <Form @submit="onSubmit">
              <Field
                name="firstname"
                :rules="validateText"
                type="text"
                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                placeholder="First Name"
                v-model="firstname"
              />
              <ErrorMessage
                name="firstname"
                class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4"
              />
              <Field
                name="lastname"
                :rules="validateText"
                type="text"
                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                placeholder="Last Name"
                v-model="lastname"
              />
              <ErrorMessage
                name="lastname"
                class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4"
              />
              <Field
                name="email"
                :rules="validateEmail"
                type="text"
                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                placeholder="Email Address"
                v-model="email"
              />
              <ErrorMessage
                name="email"
                class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4"
              />
              <Field
                name="password"
                :rules="validateText"
                type="text"
                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                placeholder="Password"
                v-model="password"
              />
              <ErrorMessage
                name="password"
                class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4"
              />
              <button
                class="w-full uppercase border-b-4 border-green-600 text-base bg-green-primary font-semibold text-white rounded-lg py-4 mb-4"
              >
                Register
              </button>
              <p
                class="text-xs sm:text-right text-center text-grayish-blue-neutral px-2"
              >
                Already have an account?
                <router-link class="text-red-primary cursor-pointer" to="/login"
                  >Sign in</router-link
                >
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import UserService from "../api/user/user.service";
import { useToast } from "vue-toastification";
const toast = useToast();

export default defineComponent({
  name: "RegisterView",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      const data = {
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        password: this.password,
      };
      UserService.register(data)
        .then(() => {
          this.$router.push("/register");
          toast.success("Successfully registered");
        })
        .catch((err) => {
          if (err.response.data.statusCode === 400) {
            toast.error("User already exists");
          }
        });
    },
    validateEmail(value: string) {
      if (!value) {
        return "This field is required";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      return true;
    },
    validateText(value: string) {
      if (!value) {
        return "This field is required";
      }
      return true;
    },
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  box-shadow: inset 0 0 0 1000px hsl(0, 100%, 55%, 0.5);
}
</style>
