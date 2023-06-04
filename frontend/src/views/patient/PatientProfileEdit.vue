<template>
    <section id="edit-profile">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <breadcrumbs is-patient>
                        <router-link to="/profil">Mój profil</router-link>
                        <router-link to="/profil/edycja-profilu">Edycja profilu</router-link>
                    </breadcrumbs>
                    <hello-message name="Mariusz" icon-name="clipboard"><template v-slot:info>Tutaj możesz edytować swoje dane personalne oraz dodać przyjmowane leki</template></hello-message>
                    <div class="d-flex flex-column align-items-center"> 
                        <div class="col-md-6">
                            <h1>Edycja profilu</h1>
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
                                    <label class="align-self-start" for="tel">Telefon kontaktowy</label>
                                    <input type="tel" class="form-control" id="tel">
                                </div>
                                <div class="form-group d-flex flex-column">
                                    <label class="align-self-start" for="pesel">PESEL</label>
                                    <input type="text" class="form-control" id="pesel">
                                </div>
                                <div class="form-group d-flex flex-column">
                                    <label class="align-self-start" for="city">Miejscowość</label>
                                    <input type="text" class="form-control" id="city">
                                </div>
                                <div class="form-group d-flex flex-column">
                                    <label class="align-self-start" for="postal-code">Kod pocztowy</label>
                                    <input type="text" class="form-control" pattern="[0-9]{2}-[0-9]{3}" placeholder="00-000" id="postal-code">
                                </div>
                                <div class="form-group d-flex flex-column">
                                    <label class="align-self-start" for="street">Ulica i nr budynku</label>
                                    <input type="text" class="form-control" id="street">
                                </div>         
                                <base-button type="dark">Zapisz zmiany</base-button>
                                <router-link to="/profil"><base-button type="light">Anuluj</base-button></router-link>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.col-md-6 {
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
        margin: 30px 10px;

        .span-icon {
            display: inline-block;
            transition: all 0.2s ease-in-out;
        }
    }

    .base-button:hover .span-icon {
        transform: translateX(5px);
    }

</style>