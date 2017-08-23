<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="~assets/img/logo.png">
      </a>
      <div class="navbar-burger burger" data-target="navMenubd-example">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navMenubd-example" class="navbar-menu">
      <div class="navbar-start">
        
      </div>
      <div class="navbar-end">
        <a class="navbar-item" href="">
          Events
        </a>
        <a class="navbar-item" href="">
          Gallery
        </a>
        <a class="navbar-item" href="">
          Blog
        </a>
        <a class="navbar-item" href="">
          About
        </a>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary is-inverted" href="">
                <span>Register</span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary " href="">
                <span>Login</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    mounted(){
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      // Check if there are any nav burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    }
  }
</script>