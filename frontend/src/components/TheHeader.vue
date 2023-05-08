<template>
  <header>
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid" v-if="isLoggedIn">
        <router-link to="/"><img src="../assets/images/logo.png" class="nav-logo" alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-lg-0 logged-in">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active-logged-in" to="/">Strona główna</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active-logged-in" to="/wizyty">Wizyty</router-link>
            </li>
            <li class="nav-item"> 
              <router-link class="nav-link" active-class="active-logged-in" to="/recepty">Recepty</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active-logged-in" to="/umow-wizyte">Umów wizytę</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="container-fluid" v-else>
        <router-link to="/"><img src="../assets/images/logo.png" class="nav-logo" alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active-logged-out" to="/">Strona główna</router-link>
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
              <router-link class="nav-link" active-class="active-logged-out" to="/umow-wizyte">Umów wizytę</router-link>
            </li>
            <li class="d-md-none">
              <router-link class="nav-link" active-class="active-logged-out" to="/logowanie">Logowanie</router-link>
            </li>
            <li class="d-md-none">
              <router-link class="nav-link" active-class="active-logged-out" to="/rejestracja">Rejestracja</router-link>
            </li>
          </ul>
          <div class="login-section d-none d-md-flex">
            <router-link class="nav-link register-button" active-class="active" to="/rejestracja">Rejestracja</router-link>
            <router-link class="nav-link login-button" active-class="active" to="/logowanie">
              <base-button type="dark">Logowanie</base-button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  data(){
    return {
      isLoggedIn: true
    }

  }
};
</script>

<style lang="scss" scoped>
  .nav-logo {
    width: 50px;
    margin-right: 20px;
  }

  nav {
    border-bottom: 1px solid #D1D9E2;
    background-color: $primary;
    color: $secondary;

    @media (min-width: 768px) {
      padding: 15px;
      padding-left: 35px;
      padding-right: 35px;
  }

    ul.navbar-nav {
      li.nav-item {
        margin: 0 5px;
  
        .nav-link {
          padding: 9px 17px;
          font-weight: 500;
          
          &.active-logged-out {
            font-weight: 800;
            color: $secondary;
          }
        }
      }
      &.logged-in {
        li.nav-item {
          &:first-child {
            margin-left: 50px;
          }
          margin-left: 15px;

          .nav-link {
            border-radius: 5px;
            &.active-logged-in {
              background-color: $button-light;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
  
  div.login-section {
    align-items: center;
    
    .nav-link {
      margin: 0 10px;
      &.active {
        font-weight: 600;
        color: $secondary;
      }
    }
  }


</style>