<template>
    <section id="patients-list">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <breadcrumbs>
                        <router-link to="/pacjenci">Pacjenci</router-link>
                    </breadcrumbs>
                    <hello-message icon-name="agenda"><template v-slot:info>Oto lista zarezerwowanych wizyt przez pacjentów</template></hello-message>
                    <base-table @open="toggleModalIsOpen" :isPatientsListView="true" :fields="fields" :data="data" :status="status"></base-table>
                </div>
            </div>
        </div>
    </section>
    <div v-if="modalIsOpen">
        <div @click="toggleModalIsOpen" class="overlay"></div>
        <dialog @close="toggleModalIsOpen" open>
            <div class="wrapper d-flex flex-column align-items-center">
                <img class="close-button" @click="toggleModalIsOpen" src="@/assets/images/icons/svg/base_modal_close.svg">
                <img class="profile-icon" src="@/assets/images/icons/svg/profile.svg">
                <p> Lorem ipsum </p>
                <div class="patient-info">
                    <p><span>Telefon komórkowy:</span> 000000000</p>
                    <p><span>PESEL:</span> 00000000000</p>
                    <p><span>Przyjmowane leki:</span> lorem ipsum, lorem ipsum, lorem ipsum</p>
                    <p><span>Alergie:</span> lorem ipsum</p>
                </div>
            </div>
        </dialog>    
    </div>
</template>

<script>
import axios from 'axios'
    import jwt_decode from "jwt-decode";
    import { mapGetters } from 'vuex'
    export default {
        data(){
            return {
                modalIsOpen: false,
            }
        },
        methods: {
            toggleModalIsOpen() {
                return this.modalIsOpen = !this.modalIsOpen;
            }
        },
        setup(){
            const data = [
                {pacjent: "Grzegorz Floryda"},
                {pacjent: "Lorem Ipsum"},
            ]
            const fields = [
                'pacjent', 'akcje'
            ]
            return { data, fields }
        },

        computed: {
            ...mapGetters(['user', 'isLoggedIn'])
        },

        async created(){
            const token = localStorage.getItem('token');
            
            const token_decoded = jwt_decode(token);
            const response = await axios.get(`user/${token_decoded.nameid}`);
            console.log(response);
            await this.$store.dispatch('user', response.data.data);
        }
        
    }

        
    
</script>

<style lang="scss" scoped>
    

    div {
        div.overlay {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            z-index: 0;
            background-color: rgba(0, 0, 0, 0.35);
        }
        
        dialog {
            border: 0;
            padding: 0;
            position: fixed;
            left: 50%;
            margin: 0;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0);

            div.wrapper {
                border: 1.5px solid $secondary;
                background-color: $base-modal-background;
                border-radius: 10px;
                filter: drop-shadow(0 0 30px #999);
                padding: 30px;
                position: relative;
                max-width: 500px;

                img {
                    &.profile-icon {
                        width: 70px;
                    }
                    &.close-button {
                        width: 30px;
                        position: absolute;
                        right: 30px;
                        top: 30px;
                        cursor: pointer;
                    }
                }

                p {
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 40px;
                    text-align: center;
                    letter-spacing: -0.02em;
                    color: #2E3646;
                    margin-top: 24px;
                }

                div.patient-info {
                    margin-top: 0px;

                    p {
                        text-align: left;
                        font-size: 20px;
                        color: $secondary;
                        font-weight: 400;
                        margin: 0;
                        span {
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
</style>