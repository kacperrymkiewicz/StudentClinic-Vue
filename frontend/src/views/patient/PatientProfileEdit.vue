<template>
    <section id="edit-profile">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <breadcrumbs is-patient>
                        <router-link to="/profil">Mój profil</router-link>
                        <router-link to="/profil/edycja-profilu">Edycja profilu</router-link>
                    </breadcrumbs>
                    <hello-message :name="user.firstName" icon-name="clipboard"><template v-slot:info>Tutaj możesz edytować swoje dane personalne oraz dodać przyjmowane leki</template></hello-message>
                    <div class="d-flex flex-column align-items-center"> 
                        <div class="col-md-6">
                            <h1>Edycja profilu</h1>
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
                                    <label class="align-self-start" for="tel">Telefon kontaktowy</label>
                                    <input type="tel" class="form-control" id="tel" v-model.trim="state.phoneNumber">
                                </div>
                                <p v-if="v$.phoneNumber.$error"> {{ v$.phoneNumber.$errors[0].$message }} </p>


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
                                    <input type="text" class="form-control" id="street" v-model.trim="state.streetAddress">
                                </div>
                                <p v-if="v$.streetAddress.$error"> {{ v$.streetAddress.$errors[0].$message }} </p>

                                <div class="form-group d-flex flex-column">
                                    <label class="align-self-start" for="allergies">Alergie</label>
                                    <textarea id="allergies" rows="3" v-model.trim="state.allergies"></textarea>
                                </div>

                                <div class="form-group d-flex flex-column">
                                    <label class="align-self-start" for="medications">Przyjmowane leki</label>
                                    <textarea id="medications" rows="3" v-model.trim="state.medicationsTaken"></textarea>
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

<script>

import { mapGetters, useStore } from 'vuex';
import axios from 'axios'
import { useToast } from "vue-toastification";
import { useVuelidate } from '@vuelidate/core'
import { reactive, computed } from 'vue';
import { required, helpers, email, alphaNum, minLength, not } from '@vuelidate/validators'
import { useRouter } from 'vue-router'


export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const toast = useToast();

        const postalCodeRegex = helpers.regex(/^[0-9]{2}-[0-9]{3}/, /\d/)
        const phoneNumberRegex = helpers.regex(/(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/, /\d/)

        const state = reactive({
            firstName: store.getters.patient.user.firstName,
            lastName: store.getters.patient.user.lastName,
            emailAddress: store.getters.patient.user.emailAddress,
            phoneNumber: store.getters.patient.phoneNumber,
            city: store.getters.patient.city,
            postalCode: store.getters.patient.postalCode,
            streetAddress: store.getters.patient.streetAddress,
            allergies: store.getters.patient.allergies,
            medicationsTaken: store.getters.patient.medicationsTaken,
        })

        const rules = computed(() => {
            return {
                firstName: { 
                    required: helpers.withMessage('Pole nie może być puste', required),
                    minLength: helpers.withMessage('Imię jest zbyt krótkie', minLength(2)), 
                },
                lastName: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    minLength: helpers.withMessage('Nazwisko jest zbyt krótkie', minLength(2)), 
                },
                emailAddress: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    email: helpers.withMessage("Niepoprawny adres email", email)
                },
                phoneNumber: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    phoneNumberRegex: helpers.withMessage('Niepoprawny numer telefonu', phoneNumberRegex)
                },
                city: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                },
                postalCode: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    postalCodeRegex: helpers.withMessage('Niepoprawny adres email', postalCodeRegex),
                },
                streetAddress: {
                    required: helpers.withMessage('Pole nie może być puste', required),
                    alphaNum: helpers.withMessage('Niepoprawna wartość', not(alphaNum)),
                    minLength: helpers.withMessage('Podana nazwa ulicy jest zbyt krótka', minLength(3))
                },
            }
        })
    

        const submitForm = async () => {
            const isValid = await v$.value.$validate()
            if(isValid){
                axios
            .put(`Patients`, {
                id: store.getters.patient.id,
                user: {
                    id: store.getters.patient.id,
                    firstName: state.firstName,
                    lastName: state.lastName,
                    emailAddress: state.emailAddress,
                    accountType: "Patient",
                },
                pesel: store.getters.patient.pesel,
                phoneNumber: state.phoneNumber,
                allergies: state.allergies,
                medicationsTaken: state.medicationsTaken,
                city: state.city,
                postalCode: state.postalCode,
                streetAddress: state.streetAddress
            })
            .then(() => {
                toast.success("Zmiany zostały zapisane");
                router.replace('/profil');
            })
            .catch((error) => {
                //this.toast.error("Wystąpił błąd przy edycji profilu");
                console.log(error)
            })
            } else {
                toast.error("Błędy w formularzu");
            }
        }

        const v$ = useVuelidate(rules, state)

        return { toast, state, rules, submitForm, v$ }
    },
    computed: {
        ...mapGetters(['patient', 'user'])
    },

}

</script>

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

                textarea {
                    box-sizing: border-box;
                    border: 1px solid #5F6D7E;
                    border-radius: 8px;
                    background: #F8F9FB;
                    padding: 8px 18px;
                    resize: none;
                    
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