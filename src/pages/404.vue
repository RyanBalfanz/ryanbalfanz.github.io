<template>
  <Layout>
    <h1>Not found</h1>
    <p>It's not here.</p>
    <p>Back to <g-link to="/">{{ $static.metadata.siteName }}</g-link></p>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Not Found'
  }
}
</script>
