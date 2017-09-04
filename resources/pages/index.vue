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
      <next-event :eventData="nextEvent"></next-event>
    </section>
    <hr class="pmv-hr-line"/>
    <section class="section">
      <more-event></more-event>
    </section>
  </div>
</template>

<script>
  import MyNavbar from '~/components/Navbar.vue'
  import NextEvent from '~/components/home/NextEvent.vue'
  import MoreEvent from '~/components/home/MoreEvent.vue'

  export default {
    components: {
      MyNavbar,
      NextEvent,
      MoreEvent
    },
    data (){
      return {
        nextEvent: {
          date : 'September 17, 2017',
          timeStamp : 1505635200
        }
      }
    }
  }
</script>
