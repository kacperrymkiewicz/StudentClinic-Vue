<template>
    <section id="signup">
      <div class="container">
        <div class="row d-flex flex-column align-content-center">
          <div class="col-md-5">
            <h1>Rejestracja</h1>
            <form>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="name">Imię</label>
                    <input type="text" class="form-control" id="name">
                </div>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="surname">Nazwisko</label>
                    <input type="text" class="form-control" id="surname">
                </div>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="email">Adres email</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="pass">Hasło</label>
                    <input type="password" class="form-control" id="pass">
                </div>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="repeat-pass">Powtórz hasło</label>
                    <input type="password" class="form-control" id="repeat-pass">
                </div>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="tel">Telefon kontaktowy</label>
                    <input type="tel" class="form-control" id="tel">
                </div>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="pesel">PESEL</label>
                    <input type="text" class="form-control" id="pesel">
                </div>
                <div class="form-check d-flex">
                    <input type="checkbox" class="form-check-input" id="regulamin">
                    <label class="form-check-label" for="regulamin">Akceptuję <span><router-link class="align-self-start" to="/logowanie">regulamin</router-link></span></label>
                </div>
                <base-button type="dark" :has-icon="true">Zarejestruj się</base-button>
                <p>Masz już konto? <router-link to="/logowanie">Zaloguj się</router-link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
export default {
    name: "SignUpView",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

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

            .form-check {
                input {
                    border-color: $secondary;
                    &:checked {
                        background-color: $teal;
                        border-color: $secondary;
                    }
                }

                label {
                    margin-left: 10px;
                    font-weight: 500;
                    color: $secondary;

                    span {

                        a {
                            color: $teal;
                        }
                        
                    }
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
</style>
  