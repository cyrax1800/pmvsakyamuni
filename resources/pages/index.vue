<template>
  <div>
    <my-navbar/>
    <section class="hero is-success is-fullheight header-image">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Connect
          </h1>
          <h3 class="subtitle is-3">
            and grow together
          </h3>
          <h3 class="subtitle">
            Become a member of our PMV today!
          </h3>
          <a class="button is-primary">Join Us</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
  import MyNavbar from '~/components/Navbar.vue'
  export default {
    components: {
      MyNavbar
    }
  }
</script>
