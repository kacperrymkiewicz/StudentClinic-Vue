<template>
    <section id="edit-password">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <breadcrumbs is-patient>
                        <router-link to="/profil">Mój profil</router-link>
                        <router-link to="/profil/edycja-hasla">Edycja hasła</router-link>
                    </breadcrumbs>
                    <hello-message :name="user.firstName" icon-name="clipboard"><template v-slot:info>Tutaj możesz edytować swoje hasło do konta</template></hello-message>
                    <div class="d-flex flex-column align-items-center"> 
                        <div class="col-md-6">
                            <h1>Edycja hasła</h1>
                            <form @submit.prevent="submitForm">
                                <div class="form-group d-flex flex-column">
                                    <label class="align-self-start" for="current-password">Aktualne hasło</label>
                                    <input type="password" class="form-control" id="current-password" v-model.trim="currentPassword">
                                </div>
                                <div class="form-group d-flex flex-column">
                                    <label class="align-self-start" for="new-password">Nowe hasło</label>
                                    <input type="password" class="form-control" id="new-password" v-model.trim="newPassword">
                                </div>  
                                <div class="form-group d-flex flex-column">
                                    <label class="align-self-start" for="repeat-new-password">Powtórz nowe hasło</label>
                                    <input type="password" class="form-control" id="repeat-new-password" v-model.trim="repeatNewPassword">
                                </div>  
                                <base-button type="dark">Zmień hasło</base-button>
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
import { mapGetters } from 'vuex';
import axios from 'axios'
import { useToast } from "vue-toastification";
import jwt_decode from "jwt-decode";

export default {
    setup() {
        const toast = useToast();
        return { toast }
    },
    computed: {
        ...mapGetters(['patient', 'user'])
    },
    data(){
        return {
            currentPassword: null,
            newPassword: null,
            repeatNewPassword: null,
        }
    },

    methods: {
        async submitForm(){
            if(this.newPassword != null && (this.newPassword == this.repeatNewPassword)) {
                await axios
                .post(`Auth/ChangePassword`, {
                    id: this.user.id,
                    currentPassword: this.currentPassword,
                    newPassword: this.newPassword,
                })
                .then(() => {
                    this.toast.success("Hasło zostało zmienione");
                    this.$router.replace('/profil');
                })
                .catch((error) => {
                    this.toast.error("Aktualne hasło jest nieprawidłowe");
                    console.log(error)
                })
            }
            else {
                this.toast.error("Podane hasła nie są takie same");
            }
        },

    },
    async created(){
        const token = localStorage.getItem('token');
        const tokenDecoded = jwt_decode(token);

        const getPatientInfo = await axios.get(`Patients/${tokenDecoded.roleId}`);
        
        await this.$store.dispatch('patient', getPatientInfo.data.data);
        console.log(getPatientInfo);
    }
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