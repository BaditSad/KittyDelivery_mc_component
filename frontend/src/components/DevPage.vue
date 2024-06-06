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
  <div>
    <h1>Liste des composants disponibles :</h1>
    <div class="container">
      <div class="component-list">
        <div
          class="component"
          v-for="(component, index) in components"
          :key="index"
        >
          <p>{{ component.component_name }}</p>
          <button @click="downloadComponent(component)">Télécharger</button>
        </div>
      </div>
    </div>
  </div>
</template>
