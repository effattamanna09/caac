<template>
  <div class="sidebar">
    <div class="social facebook">
      <a href=" https://www.facebook.com " target="_blank">
        <p>Like on Facebook <i class="fa fa-facebook"></i></p>
      </a>
    </div>
    <div class="social twitter">
      <a href=" https://www.twitter.com " target="_blank">
        <p>Follow on Twitter<i class="fa fa-twitter"></i></p>
      </a>
    </div>
    <div class="social google">
      <a href=" https://www.plus.google.com " target="_blank">
        <p>Google+<i class="fa fa-google-plus"></i></p>
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
  line-height: 2;
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
  left: 30px;
  position: relative;
  vertical-align: middle;
  text-align: center;
  font-size: 10px;
}

.social {
  margin-left: -200px;
  width: 250px;
  padding: 0;
  display: inline-table;
  height: 0px;
  background-color: rgba(128, 128, 128, 0.73);
  box-shadow: 0px 0px 6px 0px #3e3d3d;
  cursor: pointer;
}

.social:hover {
  margin-left: -30px;
  width: 150px;
}

.facebook {
  background-color: #f0f2f5;
  border-radius: 20px;
}

.twitter {
  background-color: #f0f2f5;
  border-radius: 20px;
}

.google {
  background-color: #f0f2f5;
  border-radius: 20px;
}

.google:hover {
  background-color: #e52d27;
}
</style>
