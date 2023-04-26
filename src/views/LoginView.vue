<template>
    <section id="home">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <h1>Logowanie</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Login" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Hasło" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <button class="btn btn-primary" type="submit">
                <span class="span-text">Zaloguj się</span>
                <span class="span-icon">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66663 6H12.5M8.33329 1L12.744 5.41074C13.0695 5.73618 13.0695 6.26382 12.744 6.58926L8.33329 11" stroke="#F8F9FB" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </span>
            </button>
          </div>
          <p>Nie masz konta? <a href="#">Zarejestruj się</a></p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  // @ is an alias to /src
  export default {
    name: "HomeView",
    components: {
      
    },
  };
  </script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
    .btn {
        background-color: $dark;
        border-color: $dark;
        padding: 10px 20px;
        .span-text {
            font-weight: 600;
        }
        .span-icon {
            margin-left: 10px;
        }
    }

    p > a {
        color: $teal;
    }

    .row {
        p {
            color: $dark;
        }
    } 

    .col-md-6 {
        .input-group {
            input {
                box-sizing: border-box;
                border: 1px solid #5F6D7E;
                border-radius: 8px;

            }
        }
        h1 {
            font-weight: 600;
        }
    }

</style>
  