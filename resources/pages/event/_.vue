{{{{raw}}}}
<template>
  <div>
    <my-navbar/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-10-desktop">
            <h3 class="title is-3">Kathina Dana 2561 BE/2017</h3>
            <h5 class="subtitle is-5">Organized By - <strong class="has-text-primary">PMV Sakyamuni</strong></h5>
            <figure class="image is-4by3 is-centered">
              <img src="~assets/img/brosur-kathina2017.jpeg">
            </figure>
            <section class="hero is-primary">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    EVENT DETAILS
                  </h1>
                  <div>
                    <p><span class="icon has-text-white"><i class="fa fa-calendar"></i></span> Sabtu, 14 Oktober 2017</p>
                    <p><span class="icon has-text-white"><i class="fa fa-clock-o"></i></span> 18.00 WIB - Selesai</p>
                    <p><span class="icon has-text-white"><i class="fa fa-map-marker"></i></span> Jl. Metal II No.12 / 76, Tanjung Mulia – Medan 20241</p><br>
                  </div>
                </div>
              </div>
            </section>
            <section class="section">
              <div class="content">
                <h6 class="subtitle is-5">Namo Buddhaya,</h6>
                <blockquote>
                  "Dengan berdana secara tepat waktu dimanapun juga, dan jika buah dari dana tersebut masak, maka ia akan memperoleh kemakmuran, kekayaan, dan harta benda yang berlimpah; dan kebaikan akan datang kepadanya tepat pada waktunya dan berlimpah ruah."
                  <span><p class="has-text-right has-text-primary">Anguttara Nikaya Vol. III, 48</p></span>
                </blockquote>
                <br>
                <p>Adapun Paket yang kami sediakan untuk saudara/i yang hendak berdana <strong class="has-text-primary">(Pemesanan terakhir tanggal 10 oktober 2017)</strong>:</p>
                <table class="table is-bordered is-narrow">
                  <thead>
                    <tr>
                      <th>Paket</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Perlengkapan sehari-hari</td>
                      <td>Rp. 100.000</td>
                    </tr>
                    <tr>
                      <td>2. Obat-obatan</td>
                      <td>Rp. 100.000</td>
                    </tr>
                    <tr>
                      <td>Jubah</td>
                      <td>Rp. 500.000</td>
                    </tr>
                  </tbody>
                </table>
                <br>
                <p>Untuk melakukan pemesanan atau info acara khatina dapat menghubungi:</p>
                <p><span class="icon has-text-primary"><i class="fa fa-phone"></i></span> Jacky - 082304730949</p>
                <p><span class="icon has-text-primary"><i class="fa fa-phone"></i></span> Angelia - 082166188073</p>
                <p><span class="icon has-text-primary"><i class="fa fa-phone"></i></span> Lusiana - 08123456789</p>
                <p><span class="icon has-text-primary"><i class="fa fa-envelope-o"></i></span> pmvsakyamuni@gmail.com</p>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
{{{{/raw}}}}

<script>
  import MyNavbar from '~/components/Navbar.vue'

  export default {
    head () {
      return {
        title: `Kathina 2561 BE / 2017`
      }
    },
    mounted() {
        window.setInterval(() => {
          Math.trunc((new Date()).getTime() / 1000);
        },1000);
      },
    components: {
      MyNavbar
    },
    data (){
      return {
        
      }
    }
  }
</script>
