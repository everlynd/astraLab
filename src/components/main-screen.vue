<template>
  <div class="main-screen">
    <h2>Ready for a great <br />User experience?</h2>
    <p>Bring your media to the next <br />level!</p>
    <div class="buttons-container">
      <router-link :to="{ name: 'signUp' }"
        ><button class="signUp">Sign Up</button></router-link
      >
      <router-link :to="{ name: 'signIn' }">
        <button class="signIn arrow-1">
          <img :src="require('@/assets/arrow.svg')" alt="" /></button
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-screen {
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 302px;
  height: 655px;
  background: url("../assets/mainbgc.png");
  h2 {
    margin-top: 63px;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #181c43;
    text-align: center;
    margin-bottom: 5px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #3e4462;
  }
  .buttons-container {
    margin-top: 12px;
    .signUp {
      cursor: pointer;
      background-color: #fff;
      color: #000000;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      border: none;
      padding: 1em 2.4em;
      border-radius: 50px;
      margin-right: 1em;
    }
    .signIn {
      cursor: pointer;
      border: none;
      border-radius: 50%;
      width: 3.5em;
      height: 3.5em;
      background: #1e1a3e;
    }
  }
}
</style>