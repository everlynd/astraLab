<template>
  <div class="signUp-screen">
    <h2>Sign Up</h2>
    <div>
      <form @submit.prevent="sumbitHandler">
        <div class="input-container">
          <span class="input-span"> Full name</span>
          <input
            type="text"
            id="name"
            v-model="name"
            :class="{ invalid: nameError.length >= 1 }"
          />
          <span class="error-message" v-if="nameError.length > 0">
            {{ nameError.join() }}
          </span>
        </div>
        <div class="input-container">
          <span class="input-span"> Email </span>
          <input
            type="text"
            id="email"
            v-model="email"
            :class="{ invalid: emailError.length >= 1 }"
          />
          <span class="error-message" v-if="emailError.length > 0">{{
            emailError.join()
          }}</span>
        </div>
        <div class="input-container">
          <span class="input-span">Password</span>
          <input
            :type="show ? 'text' : 'password'"
            id="password"
            v-model="password"
            :class="{ invalid: passwordError.length >= 1 }"
          />
          <span class="error-message" v-if="passwordError.length > 0">{{
            passwordError.join()
          }}</span>
          <div class="notice">
            <img :src="require(`@/assets/notice.svg`)" alt="notice" />
            <transition name="fade">
              <div
                class="notice-container"
                v-if="showNotice"
                @click="showNotice = !showNotice"
              >
                <p>
                  Password must contain 8+ symbols, <br />1 special and 2
                  capital letters
                </p>
              </div>
            </transition>
          </div>
          <div class="v-input__append-inner">
            <div class="v-input__icon">
              <span
                type="button"
                aria-label="append icon"
                class="mdi"
                :class="{ 'mdi-eye': show, 'mdi-eye-off': !show }"
                @click="show = !show"
              ></span>
            </div>
          </div>
        </div>
        <div class="input-container">
          <span class="input-span">Repeat password</span>
          <input
            :type="show1 ? 'text' : 'password'"
            id="repeatPassword"
            v-model="passwordConfirm"
            :class="{ invalid: confirmPasswordError.length >= 1 }"
          />
          <span class="error-message" v-if="confirmPasswordError.length > 0">{{
            confirmPasswordError.join()
          }}</span>
          <div class="v-input__append-inner">
            <div class="v-input__icon">
              <span
                type="button"
                aria-label="append icon"
                class="mdi"
                :class="{ 'mdi-eye': show1, 'mdi-eye-off': !show1 }"
                @click="show1 = !show1"
              ></span>
            </div>
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    <div class="info-container">
      Already have an account? <br />
      <router-link :to="{ name: 'signIn' }">Sign In</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false,
      show1: false,
      showNotice: false,
      passwordConfirm: null,
      errors: [],
    };
  },
  computed: {
    nameError() {
      let filtered = this.errors.filter((i) => i == "Name required");
      return filtered;
    },
    emailError() {
      let filtered = this.errors.filter((i) => {
        if (i == "Email required") {
          return "Email required";
        } else if (i == "Enter valid email") {
          return "Enter valid email";
        }
      });
      return filtered;
    },
    passwordError() {
      let filtered = this.errors.filter((i) => {
        if (i == "Password required") {
          return "Password required";
        } else if (i == "Enter valid password") {
          return "Enter valid password";
        }
      });
      return filtered;
    },
    confirmPasswordError() {
      let filtered = this.errors.filter(
        (i) => i == "Password must be the same"
      );
      return filtered;
    },
    ...mapGetters(["PASSWORD", "EMAIL", "FULLNAME"]),
    password: {
      get() {
        return this.PASSWORD;
      },
      set(value) {
        this.SET_PASSWORD(value);
      },
    },
    email: {
      get() {
        return this.EMAIL;
      },
      set(value) {
        this.SET_EMAIL(value);
      },
    },
    name: {
      get() {
        return this.FULLNAME;
      },
      set(value) {
        this.SET_NAME(value);
      },
    },
  },

  methods: {
    ...mapActions(["SET_PASSWORD", "SET_NAME", "SET_EMAIL"]),

    sumbitHandler() {
      this.errors = [];

      if (!this.FULLNAME) {
        this.errors.push("Name required");
      }
      if (!this.PASSWORD) {
        this.errors.push("Password required");
      } else if (!this.validPassword(this.PASSWORD)) {
        this.showNotice = true;
        this.errors.push("Enter valid password");
      }
      if (this.passwordConfirm != this.PASSWORD) {
        this.errors.push("Password must be the same");
      }
      if (!this.EMAIL) {
        this.errors.push("Email required");
      } else if (!this.validEmail(this.EMAIL)) {
        this.errors.push("Enter valid email");
      }
      if (!this.errors.length) {
        this.$router.push("/signIn");
      }
    },
    validEmail: function (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword(password) {
      let re = /^(?=.*?[A-Z])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-+(),.]).{8,}$/;
      return re.test(password);
    },
  },
};
</script>

<style lang="scss" scoped>
.signUp-screen {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: url("../assets/otherbgc.png");
  width: 302px;
  height: 655px;
  color: #181c43;
  h2 {
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #181c43;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 63px;
  }
  form {
    background: #ffffff;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 15px;
    input {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.8);
      background: #f3f3fa;
      border-radius: 50px;
      border: none;
      padding: 10px 45px 10px 16px;
      outline: none;
    }
    .input-span {
      margin-left: 16px;
      padding-top: 23px;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.8);
    }
    button {
      border: none;
      background: #1e1a3e;
      border-radius: 50px;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
      padding: 1em 6.5em;
      margin: 39px 0 18px 0;
    }
  }
  .info-container {
    text-align: center;
    margin-top: 12px;
    a {
      color: #1e1a3e;
      text-decoration: none;
      border-bottom: 1px solid #1e1a3e;
    }
  }
  .input-container {
    position: relative;
  }
  .v-input__append-inner {
    position: absolute;
    top: 53px;
    right: 20px;
  }
  .notice {
    position: absolute;
    top: 23px;
    right: 22px;

    .notice-container {
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 14px;
      align-items: center;
      text-align: center;
      letter-spacing: -0.4px;
      color: #f3f3f3;
      position: absolute;
      bottom: 24px;
      right: -5px;
      background: #1e1a3e;
      width: 184px;
      box-shadow: 0px 5.44862px 13.6215px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      p {
        white-space: nowrap;
        padding: 0 15px;
      }
    }
  }
  .invalid {
    background: #ffe0e6;
  }

  .error-message {
    position: absolute;
    top: 80px;
    left: 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #ff6683;
    margin-left: 16px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>