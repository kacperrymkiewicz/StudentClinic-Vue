<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/"><img src="../assets/images/logo.png" alt="Logo"></router-link>
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
          </ul>
          <a class="nav-link" href="#">Rejestracja</a>
          <a class="nav-link" href="#">Logowanie</a>
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