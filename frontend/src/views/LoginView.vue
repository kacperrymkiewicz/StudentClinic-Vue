<template>
    <section id="login">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-5">
            <h1>Logowanie</h1>
            <form>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="email">Adres email</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="password">Hasło</label>
                    <input type="password" class="form-control" id="password">
                </div>
                <base-button type="dark">Zaloguj się
                    <span class="span-icon">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.66663 6H12.5M8.33329 1L12.744 5.41074C13.0695 5.73618 13.0695 6.26382 12.744 6.58926L8.33329 11" stroke="#F8F9FB" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </span>
                </base-button>
                <p>Nie masz konta? <router-link to="/rejestracja">Zarejestruj się</router-link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>


  export default {
    name: "LoginView",
  };
  </script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
    button {
        .span-text {
            font-weight: 600;
        }
        .span-icon {
            margin-left: 10px;
        }
    }


    .row {
        p {
            color: $button-dark;
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 22px;
            letter-spacing: -0.001em;
            color: $secondary;
            
            a {
                color: $teal;
            }
        }
    } 

    .col-md-5 {
        form {
            .form-group {
                margin: 13px 0;

                label {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 30px;
                    letter-spacing: -0.001em;
                    color: $secondary;

                }
                input {
                    box-sizing: border-box;
                    border: 1px solid #5F6D7E;
                    border-radius: 8px;
                    display: flex;
                    padding: 8px 18px;
                    gap: 16px;
                    background: #F8F9FB;

                }
            }
        
        }
        h1 {
            margin: 60px 0;
            font-weight: 700;
            font-weight: 700;
            font-size: 52px;
            line-height: 60px;
            text-align: center;
            letter-spacing: -0.01em;
            color: $button-dark;
        }
    }

    .base-button {
        margin: 30px 0;

        .span-icon {
            display: inline-block;
            transition: all 0.2s ease-in-out;
        }
    }

    .base-button:hover .span-icon {
        transform: translateX(5px);
    }
</style>
  