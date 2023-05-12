<template>
    <section id="profile">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <hello-message icon-name="clipboard"><template v-slot:info>Tutaj możesz zobaczyć swój profil pacjenta</template></hello-message>
                    <div class="d-flex flex-column align-items-center"> 
                        <div class="col-md-12">  
                            <div class="wrapper d-flex flex-column">
                                <div class="name d-flex flex-column align-items-center">
                                    <img src="@/assets/images/icons/svg/profile.svg">
                                    <span>Grzegorz Floryda</span>
                                </div>
                                <div class="buttons">
                                    <router-link to="/profil/edycja-profilu"><base-button type="dark">Edytuj profil</base-button></router-link>
                                    <router-link to="/profil/edycja-hasla"><base-button type="dark">Zmień hasło</base-button></router-link>
                                </div>
                            </div>
                            <div class="row base-cards-outer-wrapper">
                                <div class="col-md-6">
                                    <base-card class="base-card" @click="toggleModalIsOpen">
                                        <template v-slot:title>Dane personalne</template>
                                        <template v-slot:content>
                                            <p><span>Adres email: </span>gregflor@mail.com</p>
                                            <p><span>Telefon kontaktowy: </span>111 222 333</p>
                                            <p><span>PESEL: </span>12301234567</p>
                                            <p><span>Miejscowość: </span>Sandomierz</p>
                                            <p><span>Kod pocztowy: </span>00-000</p>
                                            <p><span>Ulica i nr budynku: </span>Baczyńskiego 116</p>
                                        </template>
                                    </base-card>
                                </div>
                                <div class="col-md-6">
                                    <div class="base-cards-inner-wrapper d-flex flex-column justify-content-between">
                                        <base-card @click="toggleModalIsOpen">
                                            <template v-slot:title>Przyjmowane leki</template>
                                            <template v-slot:content>
                                                <p>Lorem ipsum</p>
                                                <p>Lorem ipsum</p>
                                            </template>
                                            <template v-slot:button>Pokaż więcej</template>
                                        </base-card>
                                        <base-card @click="toggleModalIsOpen">
                                            <template v-slot:title>Alergie</template>
                                            <template v-slot:content>
                                                <p>Lorem ipsum</p>
                                                <p>Lorem ipsum</p>
                                            </template>
                                            <template v-slot:button>Pokaż więcej</template>
                                        </base-card>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <base-modal class="base-modal" v-bind:modalIsOpen="modalIsOpen" v-if="modalIsOpen" @click="toggleModalIsOpen">
        <template v-slot:title>Przyjmowane leki</template>
        <template v-slot:subtitle></template>
        <template v-slot:content>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
        </template>
    </base-modal>
</template>

<script>
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
    }
</script>

<style lang="scss" scoped>
#profile {
    @media (min-width: 992px) {
        padding-bottom: 40px;
    }
}

div.wrapper {

    div.name {
        img {
            width: 90px;
        }
        span {
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
            letter-spacing: -0.02em;
            margin-top: 20px;
        }
    }
    div.buttons {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        margin: 24px 0;

        @media (max-width: 992px) { 
            flex-direction: row;
            align-self: center;
        }
        button {
            margin: 12px;
        }
    }
}

div.base-cards-outer-wrapper {
    margin-top: 20px;
    .base-card > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)  {
        p {
            margin-bottom: 12px;
        }
    } 

    .base-cards-inner-wrapper {
        height: 100%;
    }
}
</style>