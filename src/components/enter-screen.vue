<template>
  <div class="enter-screen">
    <h2>Hello,{{ FULLNAME || name }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: localStorage.getItem("name"),
    };
  },
  computed: {
    ...mapGetters(["FULLNAME"]),
  },
};
</script>

<style lang="scss" scoped>
.enter-screen {
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 302px;
  height: 655px;
  background: url("../assets/enterbgc.png");
  h2 {
    margin-top: 158px;
  }
}
</style>