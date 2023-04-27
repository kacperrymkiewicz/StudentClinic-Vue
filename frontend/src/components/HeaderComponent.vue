<template>
  <header>
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/"><img src="../assets/images/logo.png" class="nav-logo" alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/">Strona główna</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Specjaliści
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Urolog</a></li>
                <li><a class="dropdown-item" href="#">Proktolog</a></li>
              </ul>
            </li>
            <li class="nav-item"> 
              <a class="nav-link" href="#">Umów wizytę</a>
            </li>
            <li class="d-md-none">
              <router-link class="nav-link" active-class="active" to="/logowanie">Logowanie</router-link>
            </li>
            <li class="d-md-none">
              <router-link class="nav-link" active-class="active" to="/rejestracja">Rejestracja</router-link>
            </li>
          </ul>
          <div class="login-section d-none d-md-flex">
            <router-link class="nav-link register-button" active-class="" to="/rejestracja">Rejestracja</router-link>
            <router-link class="nav-link login-button" active-class="" to="/logowanie">
              <base-button>Logowanie</base-button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/global.scss";
  .nav-logo {
    width: 50px;
    margin-right: 20px;
  }

  .login-section a:first-child {
    margin-right: 15px;
  }

  .login-section {
    align-items: center;
  }

  nav {
    border-bottom: 1px solid #D1D9E2;
    background-color: #F8F9FB;
    color: $secondary;
  }

  @media (min-width: 768px) {
    nav {
      padding: 15px;
      padding-left: 35px;
      padding-right: 35px;
    }  
  }

  .register-button:focus {
    color: $secondary;
  }

  .nav-link {
    font-weight: 500;
  }

  .nav-link.active {
    font-weight: 800;
    color: #5F6D7E;
  }
</style>