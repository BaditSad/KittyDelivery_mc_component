<script src="../scripts/ProfilePage.js"></script>
<style src="../stylesheets/styles.css" scoped></style>

<template>
  <header>
    <img class="title" src="../assets/title.png" alt="Kitty Delivery title" />
    <router-link to="/Dev">
        <button class="back"> Retour </button>
    </router-link>
  </header>
  <div class="container_profile">
    <form class="form">
        <h1>Votre profil Kitty</h1>
        <label class="text">
          <input disabled class="text" type="text" placeholder="Adresse email" value="default email" />
        </label>
        <label class="text">
          <input class="text" type="password" placeholder="Mot de passe" value="default password" />
        </label>
        <label class="text">
          <input class="text" type="password" placeholder="Vérification du mot de passe" value="default password" />
        </label>
        <div class="button-container">
          <button class="button-update" type="button">
            <i class="icon ion-md-lock"></i> Mettre à jour
          </button>
          <button class="button-deco" type="button">
            <i class="icon ion-md-lock"></i> Deconnexion
          </button>
          <button class="button-delete" type="button">
            <i class="icon ion-md-lock"></i> Supprimer compte
          </button>
        </div>
      </form>
  </div>
</template>
