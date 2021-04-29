<template>
  <div class="signIp-screen">
    <h2>Sign In</h2>
    <div>
      <form @submit.prevent="onSubmit">
        <div class="input-container">
          <span class="input-span"> Email </span>
          <input
            type="text"
            id="email"
            v-model="email"
            :class="{ invalid: errors.length > 0 }"
          />
        </div>
        <div class="input-container">
          <div class="input-container">
            <span class="input-span">Password</span>
            <input
              :type="show ? 'text' : 'password'"
              id="password"
              v-model="password"
              :class="{ invalid: errors.length > 0 }"
            />
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
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
    <div class="info-container">
      Don’t have an account yet? <br />
      <router-link :to="{ name: 'signUp' }">Sign Up</router-link>
    </div>
    <div class="danger-menu" v-if="showDanger">
      <p>Wrong email or password</p>
      <button @click="cleanFields">
        <img :src="require('@/assets/closebtn.svg')" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      password: null,
      email: null,
      show: false,
      showDanger: false,
      errors: [],
    };
  },
  computed: {
    ...mapGetters(["EMAIL", "PASSWORD"]),
    emailError() {
      let filtered = this.errors.filter((i) => i == "some email error");
      return filtered;
    },
    passwordError() {
      let filtered = this.errors.filter((i) => i == "some password error");
      return filtered;
    },
  },
  methods: {
    cleanFields() {
      (this.password = null),
        (this.email = null),
        (this.errors = []),
        (this.showDanger = false);
    },
    onSubmit() {
      let emailStorage = localStorage.getItem("email");
      let passwordStorage = localStorage.getItem("password");
      this.errors = [];
      if (this.password != passwordStorage || this.password === null) {
        this.showDanger = true;
        this.errors.push("some password error");
      }
      if (this.email != emailStorage) {
        this.showDanger = true;
        this.errors.push("some email error");
      }
      if (this.errors.length == 0) {
        this.showDanger = false;
        this.$router.push("/enterScreen");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.signIp-screen {
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
  .invalid {
    background: #ffe0e6;
  }
  .danger-menu {
    display: flex;
    align-items: center;
    margin: 140px auto;
    background: #ff6683;
    border-radius: 50px;
    p {
      padding: 0 0 0 25px;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #ffffff;
    }
    button {
      padding: 0 18px 0 25px;
      cursor: pointer;
      border: none;
      outline: none;
      background: transparent;
    }
  }
}
</style>