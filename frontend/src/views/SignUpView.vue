<template>
    <section id="signup">
        <div class="container">
        <div class="row d-flex flex-column align-content-center">
            <div class="col-md-5">
            <h1>Rejestracja</h1>
            <form @submit.prevent="submitForm">
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="name">Imię</label>
                    <input type="text" class="form-control" id="name" v-model.trim="state.firstName">
                </div>
                <p v-if="v$.firstName.$error"> {{ v$.firstName.$errors[0].$message }} </p>

                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="lastname">Nazwisko</label>
                    <input type="text" class="form-control" id="lastname" v-model.trim="state.lastName">
                </div>
                <p v-if="v$.lastName.$error"> {{ v$.lastName.$errors[0].$message }} </p>

                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="email">Adres email</label>
                    <input type="text" class="form-control" id="email" v-model.trim="state.emailAddress">
                </div>
                <p v-if="v$.emailAddress.$error"> {{ v$.emailAddress.$errors[0].$message }} </p>

                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="password">Hasło</label>
                    <input type="password" class="form-control" id="password" v-model.trim="state.password">
                </div>
                <p v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }} </p>

                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="repeat-pass">Powtórz hasło</label>
                    <input type="password" class="form-control" id="repeat-pass" v-model.trim="state.repeatPassword">
                </div>
                <p v-if="v$.repeatPassword.$error"> {{ v$.repeatPassword.$errors[0].$message }} </p>

                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="tel">Telefon kontaktowy</label>
                    <input type="tel" class="form-control" id="tel" v-model.trim="state.phoneNumber">
                </div>
                <p v-if="v$.phoneNumber.$error"> {{ v$.phoneNumber.$errors[0].$message }} </p>

                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="pesel">PESEL</label>
                    <input type="text" class="form-control" id="pesel" v-model.trim="state.pesel">
                </div>
                <p v-if="v$.pesel.$error"> {{ v$.pesel.$errors[0].$message }} </p>

                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="city">Miejscowość</label>
                    <input type="text" class="form-control" id="city" v-model.trim="state.city">
                </div>
                <p v-if="v$.city.$error"> {{ v$.city.$errors[0].$message }} </p>

                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="postal-code">Kod pocztowy</label>
                    <input type="text" class="form-control" id="postal-code" v-model.trim="state.postalCode" placeholder="00-000">
                </div>
                <p v-if="v$.postalCode.$error"> {{ v$.postalCode.$errors[0].$message }} </p>

                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="street">Ulica i nr budynku</label>
                    <input type="text" class="form-control" id="street" v-model.trim="state.street">
                </div>
                <p v-if="v$.street.$error"> {{ v$.street.$errors[0].$message }} </p>
                
                <div class="form-check d-flex">
                    <input type="checkbox" class="form-check-input" id="regulamin" v-model="state.regulationsAccepted">
                    <label class="form-check-label" for="regulamin">Akceptuję <span><router-link class="align-self-start" to="#">regulamin</router-link></span></label>
                </div>
                <p v-if="v$.regulationsAccepted.$error"> {{ v$.regulationsAccepted.$errors[0].$message }} </p>

                <base-button type="dark" :has-icon="true">Zarejestruj się</base-button>
                <p>Masz już konto? <router-link to="/logowanie">Zaloguj się</router-link></p>
            </form>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { reactive, computed } from 'vue';
import { useToast } from "vue-toastification";
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, sameAs, helpers, email, numeric, maxLength } from '@vuelidate/validators'
import { useRouter } from 'vue-router'

export default {
    name: "SignUpView",
    setup() {

        const router = useRouter();
        const toast = useToast();
        
        const state = reactive({
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            repeatPassword: "",
            phoneNumber: "",
            pesel: "",
            city: "",
            postalCode: "",
            street: "",
            regulationsAccepted: false, 
        })

        const rules = computed(() => {
            return {
                firstName: { 
                    required: helpers.withMessage('Pole nie może być puste', required),
                    minLength: helpers.withMessage('Imię jest zbyt krótkie', minLength(2)), 
                },
                lastName: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    minLength: helpers.withMessage('Nazwisko zbyt krótkie', minLength(2)), 
                },
                emailAddress: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    email: helpers.withMessage("Niepoprawny adres email", email)
                },
                password: {
                    minLength: helpers.withMessage("Hasło musi mieć co najmniej 8 znaków", minLength(8)),
                    required: helpers.withMessage('Pole nie może być puste', required),
                },
                repeatPassword: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    sameAs: helpers.withMessage('Hasła muszą być jednakowe', sameAs(state.password)),
                },
                phoneNumber: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    minLength: helpers.withMessage('Niepoprawny numer telefonu', minLength(9)), 
                    maxLength: helpers.withMessage('Niepoprawny numer telefonu', maxLength(9)), 
                    numeric
                },
                pesel: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    minLength: helpers.withMessage('Niepoprawny PESEL', minLength(11)), 
                    maxLength: helpers.withMessage('Niepoprawny PESEL', maxLength(11)), 
                    numeric
                },
                city: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                },
                postalCode: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                },
                street: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                },
                regulationsAccepted: {
                    sameAs: helpers.withMessage('Zaakceptuj regulamin', sameAs(true)),
                }
            }
        })
        
        const submitForm = async () => {
            const isValid = await v$.value.$validate()
            if(isValid){
                axios.post('/Auth/Register', {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    emailAddress: state.emailAddress,
                    password: state.password,
                    phoneNumber: 'state.phoneNumber',
                    pesel: 'state.pesel',
                    city: 'state.city',
                    postalCode: 'state.postalCode',
                    streetAddress: 'state.streetAddress',
                })
                .then(() => {
                    toast.success("Zarejestrowano pomyślnie");
                    router.replace({name: "login"});
                })
                .catch(() => {
                    //    
                    })
            } else {
                toast.error("Błędy w formularzu");
            }
        }

        const v$ = useVuelidate(rules, state)

        return { toast, state, rules, submitForm, v$ }
    },

//     emailAddressRegex: () =>  /^[^@]+@\w+(\.\w+)+\w$/,
//     phoneNumberRegex: () => /^\d{9}$/,
//     peselRegex: () => /^\d{11}$/,
//     postalCodeRegex: () => /^[0-9]{2}-[0-9]{3}/

};

</script>

<style lang="scss" scoped>
    div.row {
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

    div.col-md-5 {
        form {
            div.form-group {
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

            div.form-check {
                margin: 30px 0 10px;
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
        
        div + p {
            margin: 0;
            color: $button-red;
        }
    }
</style>
  