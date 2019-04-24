<template>
  <Layout>
    <h1>I'm Ryan Balfanz</h1>

    <p>San Francisco, CA</p>

    <p class="home-links">
      <a href="https://www.facebook.com/ryanbalfanz" target="_blank" rel="noopener">Facebook</a>
      <a href="https://twitter.com/ryanbalfanz" target="_blank" rel="noopener">Twitter</a>
      <a href="https://www.linkedin.com/in/ryanbalfanz" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://github.com/RyanBalfanz" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Ryan Balfanz"
  },
  mounted: function() {
    this.onMounted()
  },
  methods: {
    onMounted: function() {
      this.set_background_image()
    },
    set_background_image: function() {
      var config = {
        height: window.innerHeight,
        width: window.innerWidth,
        cell_size: 50,
        variance: 1.0,
        seed: null,
        x_colors: "RdYlBu"
      };
      var pattern = Trianglify(config);
      document.body.style.backgroundImage = "url('" + pattern.png() + "')";
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
