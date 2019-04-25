// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // https://cdnjs.com/libraries/trianglify
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js" integrity="sha256-mn6m44JLn4jLWLnjLMGPhfunOfbo6/VE3wv3nH51OzI=" crossorigin="anonymous"></script>
  head.script.push({
    'src': 'https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js',
    'integrity': 'sha256-mn6m44JLn4jLWLnjLMGPhfunOfbo6/VE3wv3nH51OzI=',
    'crossorigin': 'anonymous',
  })

  // https://developers.google.com/web/tools/lighthouse/audits/address-bar
  head.meta.push({
    name: 'theme-color',
    content: '#317EFB'
  })
}
