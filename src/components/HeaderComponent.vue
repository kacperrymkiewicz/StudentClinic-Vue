<template>
  <header>
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/"><img src="../assets/images/logo.png" class="nav-logo" alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
              <a class="nav-link" href="#">Logowanie</a>
            </li>
            <li class="d-md-none">
              <a class="nav-link" href="#">Rejestracja</a>
            </li>
          </ul>
          <div class="login-section d-none d-md-flex">
            <a class="nav-link register-button" href="#">Rejestracja</a>
            <a class="nav-link login-button" href="#">Logowanie</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  components: {
    
  },
};
</script>

<style lang="scss" scoped>
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
    padding: 15px;
    padding-left: 35px;
    padding-right: 35px;
    border-bottom: 1px solid #D1D9E2;
    background-color: #F8F9FB;
  }

  .login-button {
    background-color: #2E3646;
    border-radius: .5rem;
    color: white;
    padding: 8px 18px;
  }

  .login-button:hover {
    color: white;
    background-color: #2F4757;
  }

  .nav-link {
    font-weight: 500;
  }
</style>