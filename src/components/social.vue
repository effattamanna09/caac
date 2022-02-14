<template>
  <div class="sidebar">
    <div class="social facebook">
      <a href=" https://www.facebook.com " target="_blank">
        <p>
          <v-icon> mdi-facebook</v-icon>
        </p>
      </a>
    </div>
    <div class="social twitter">
      <a href=" https://www.twitter.com " target="_blank">
        <p>
          <v-icon> mdi-twitter</v-icon>
        </p>
      </a>
    </div>
    <div class="social linkdin">
      <a href=" https://www.linkedin..com " target="_blank">
         <p>
          <v-icon> mdi-linkedin</v-icon>
        </p>
      </a>
    </div>
     <div class="social youtube">
      <a href=" https://www.youtube.com " target="_blank">
       <p>
          <v-icon> mdi-youtube</v-icon>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "social",
  components: {},

  data: () => ({}),
};
</script>
<style scoped>
a {
  text-decoration: none;
  vertical-align: middle;
  text-align: center;
  line-height: 1;
}

p {
  margin: 0px;
}

.sidebar {
  height: auto;
  width: 0px;
  position: fixed;
  text-align: center;
  top: 35vh;
  padding: 10px;
}

p i {
  left: 35px;
  position: relative;
  vertical-align: middle;
  text-align: center;
  font-size: 10px;
}

.social {
  margin-left: -100px;
  width: 150px;
  padding: 0;
  display: inline-table;
  height: 0px;
  background-color: rgba(177, 172, 172, 0.73);
  box-shadow: 0px 0px 2px 0px #797777;
  cursor: pointer;
  margin-top: 4px;
}

.social:hover {
  margin-left: -30px;
  width: 100px;
}

.facebook {
  background-color: #f0f2f5;
  border-radius: 20px;
}

.twitter {
  background-color: #f0f2f5;
  border-radius: 20px;
}

.linkdin {
  background-color: #f0f2f5;
  border-radius: 20px;
}
.youtube {
  background-color: #f0f2f5;
  border-radius: 20px;
}

.youtube:hover {
  background-color: #e52d27;
}
</style>
