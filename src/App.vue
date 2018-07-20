<template>
  <div id="app">
    apollo<br>
  </div>
</template>

<script>
  import gql from 'graphql-tag';

  export default {
    name: 'App',
    apollo:{
      address:gql`{
            CarSource{

            }
      }`
    }
  }
</script>

<style>

</style>
