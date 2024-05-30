<script src="../scripts/DevPage.js"></script>
<style src="../stylesheets/styles.css" scoped></style>

<template>
  <header>
    <img class="logo" src="../assets/logo.jpg" alt="Kitty Delivery logo" />
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
    <router-link to="/profile">
        <button class="profile_button">Profile</button>
    </router-link>
  </header>
      <h1 class="liste">Liste des composants disponibles :</h1>
  <div class="container">
    <div class="component-list">
      <div class="component">
      <p>[Composant 1]</p>
        <button>Télécharger</button>
      </div>
    </div>
  </div>
</template>