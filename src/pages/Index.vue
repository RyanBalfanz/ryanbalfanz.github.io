<template>
  <Layout>
    <h1>I'm Ryan Balfanz</h1>

    <p>San Francisco, CA</p>

    <p class="home-links">
      <a
        v-for="link in social_links"
        v-bind:key="link.name"
        v-bind:href="link.url"
        target="_blank"
        rel="noopener"
      >{{ link.name }}</a>
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
  data: function() {
    return {
      social_links: [
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/ryanbalfanz",
          "network": "facebook"
        },
        {
          "name": "Twitter",
          "url": "https://twitter.com/ryanbalfanz",
          "network": "twitter"
        },
        {
          "name": "LinkedIn",
          "url": "https://www.linkedin.com/in/ryanbalfanz",
          "network": "linkedin"
        },
        {
          "name": "GitHub",
          "url": "https://github.com/RyanBalfanz",
          "network": "github"
        }
      ]
    }
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
