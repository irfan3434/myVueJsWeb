<template>
    <div>
      
     <nav>
      <router-link to="/about">{{ $t('header.about') }}</router-link>
      <br />
      <router-link to="/contact">{{ $t('header.contact') }}</router-link>
    </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  
 body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}


  </style>
  