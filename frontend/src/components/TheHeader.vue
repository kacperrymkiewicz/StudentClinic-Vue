<template>
  <header>
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/"><img src="../assets/images/logo.png" class="nav-logo" alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="logged-in collapse navbar-collapse" id="navbarSupportedContent" v-if="isLoggedIn" >
          <ul class="navbar-nav me-auto mb-lg-0 ">
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
          <div class="profile d-flex align-items-center">
            <svg class="profile-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" fill="#5F6D7E"/>
              <path d="M20 21.3334C21.8409 21.3334 23.3333 19.841 23.3333 18C23.3333 16.1591 21.8409 14.6667 20 14.6667C18.159 14.6667 16.6666 16.1591 16.6666 18C16.6666 19.841 18.159 21.3334 20 21.3334ZM20 21.3334C17.0544 21.3334 14.6666 23.1242 14.6666 25.3334M20 21.3334C22.9455 21.3334 25.3333 23.1242 25.3333 25.3334" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <div>
              <p> {{ name }}</p>
              <p> {{ role }}</p>
            </div>
            <svg class="profile-arrow" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1.33331L6.58926 5.74406C6.26382 6.0695 5.73618 6.0695 5.41074 5.74406L1 1.33331" stroke="#5F6D7E" stroke-width="1.5" stroke-linecap="round"/>
            </svg>

          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-else>
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
      isLoggedIn: true,
      name: "Lorem Ipsum",
      role: "Pacjent"
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

  div {
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
    &.logged-in {
        ul.navbar-nav {
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

      div.profile {
        div {
          text-align: left;
          margin: 0 10px;
          p {
            &:first-child {
              font-weight: 500;
            }
            margin: 0;
            font-size: 14px;
          }
        }
        svg.profile-arrow {
          margin-left: 30px;
        }
      }
    }
  }
}
  
  


</style>