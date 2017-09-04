<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="columns is-mobile is-centered">
          <div class="column is-narrow">
            <p><span class="icon is-large"><i class="fa fa-calendar"></i></span></p>
          </div>
          <div class="column is-narrow">
            <span class="tag is-primary">Next</span>
            <p>UPCOMING EVENT</p>
          </div>
        </div>
        <h3 class="title is-3 has-text-centered">Kedai Dhamma</h3>
        <h3 class="subtitle is-3 has-text-centered">The Gadget</h3>
      </div>
      <hr class="pmv-hr-line"/>
      <div class="column is-one-quarter v-center">
        <div class="columns is-mobile">
          <div class="column">
            <p><span class="icon has-text-primary"><i class="fa fa-calendar"></i></span> Minggu, 17 September 2017</p>
            <p><span class="icon has-text-primary"><i class="fa fa-clock-o"></i></span> 15.00 WIB - Selesai</p>
            <p><span class="icon has-text-primary"><i class="fa fa-map-marker"></i></span> Jl. Metal II No.12 / 76, Tanjung Mulia – Medan 20241</p>
            <br class="is-hidden-mobile">
            <a class="button is-info is-fullwidth is-hidden-mobile">See Details</a>
          </div>
        </div>
      </div>

      <div class="column is-half v-center">
        <div class="columns is-mobile">
          <div class="column is-one-quarter-desktop">
            <p class="pmv-digit">{{ days }}</p>
            <p class="pmv-text">Days</p>
          </div>
          <div class="column is-one-quarter-desktop">
            <p class="pmv-digit">{{ hours }}</p>
             <p class="pmv-text">Hours</p>
          </div>
          <div class="column is-one-quarter-desktop">
             <p class="pmv-digit">{{ minutes }}</p>
             <p class="pmv-text">Minutes</p>
          </div>
          <div class="column is-one-quarter-desktop">
             <p class="pmv-digit">{{ seconds }}</p>
             <p class="pmv-text">Seconds</p>
          </div>
        </div>
        <a class="button is-info is-fullwidth is-hidden-desktop">See Details</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      mounted() {
        window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
        this.deadLine = this.eventData.timeStamp;
      },

      props : {
        eventData:{
          type: Object,
          default: function () {
            return null;
          }
        }
      },

      data() {
        return {
          now: Math.trunc((new Date()).getTime() / 1000),
          deadLine: 0
        }
      },

      computed: {
        seconds() {
          return (this.deadLine - this.now) % 60;
        },

        minutes() {
          return Math.trunc((this.deadLine - this.now) / 60) % 60;
        },

        hours() {
          return Math.trunc((this.deadLine - this.now) / 60 / 60) % 24;
        },

        days() {
          return Math.trunc((this.deadLine - this.now) / 60 / 60 / 24);
        }
      }
  }
</script>