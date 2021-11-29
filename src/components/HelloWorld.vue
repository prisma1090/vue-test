<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Silahkan selesaikan Pengerjaan service ini, jika sudah selesai klik tombol "Order Selesai"<br>
      *Mandatory
    </p>
    <br>
    <br>
    <router-link to="/foto">
    <h3>Foto Persyaratan</h3>
    </router-link>
    <br>
    <br>
    <a href="/ttd" class="btn btn-info">Tanda Tangan Perjanjian</a>
    <br>
    <br>
    <a href="/bpkb" class="btn btn-info">Bpkb Kendaraan</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
