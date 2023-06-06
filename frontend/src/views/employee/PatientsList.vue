<template>
    <section id="patients-list">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <breadcrumbs>
                        <router-link to="/pacjenci">Pacjenci</router-link>
                    </breadcrumbs>
                    <hello-message v-if="user" :name="user.firstName" icon-name="agenda"><template v-slot:info>Oto lista zarezerwowanych wizyt przez pacjentów</template></hello-message>         
                    <div class="wrapper d-flex flex-column">
                        <div class="search">
                            <div class="input-group mb-5">
                                <input type="search" class="form-control" v-model='searchQuery' placeholder="Wyszukaj...">
                            </div>
                        </div>
                        <div class="table-responsive d-flex flex-column">  
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th v-for="field in fields" :key='field'> {{ capitalizeFirstLetter(field) }} </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="patient in patients" :key="patient.id">
                                        <td v-for="field in fields" :key='field'> 
                                            <span v-if="field == 'pacjent'">
                                                <span>
                                                    <img src="@/assets/images/icons/svg/profile.svg">
                                                </span>
                                                <span>
                                                    {{ capitalizeFirstLetter(patient.user.firstName) }} {{  capitalizeFirstLetter(patient.user.lastName) }}   
                                                </span>
                                            </span>
                                            <span v-else>
                                                <span >
                                                    <button @click="toggleModalIsOpen" class="blue-button">Karta pacjenta</button>
                                                    <button class="teal-button">Wypisz receptę</button>
                                                </span>
                                            </span> 
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>
                                            <span class="tfoot-icon">
                                                <img src="@/assets/images/icons/svg/table_arrow_left.svg">
                                            </span>
                                            <span class="tfoot-text">Poprzednia strona</span></th>
                                        <th v-for="field in fields.length-2" :key="field"></th>  
                                        <th>
                                            <span class="tfoot-text">Następna strona</span>
                                            <span class="tfoot-icon">
                                                <img src="@/assets/images/icons/svg/table_arrow_right.svg">
                                            </span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
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
                    <p><span>Telefon komórkowy:</span> asd</p>
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
import { mapGetters } from 'vuex'
import { computed, ref } from "vue";
import jwt_decode from "jwt-decode";

export default {
    data(){
        return {
            modalIsOpen: false,
            patients: [],
            fields: ['pacjent', 'akcje'],
        }
    },
    methods: {
        toggleModalIsOpen() {
            return this.modalIsOpen = !this.modalIsOpen;
        },
    },
    computed: {
        ...mapGetters(['user', 'isLoggedIn'])
    },

    setup(props) {
        
        let sort = ref(false);
        let updatedList =  ref([])
        let searchQuery = ref("");
        
        const sortedList = computed(() => {
            if (sort.value) {
                return updatedList.value
            } else {
                return props.data;
            }
        });

        const filteredList = computed(() => {
            return sortedList.value.filter((product) => {
                if(product.pacjent){
                    return product.pacjent.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1;
                }
                return product;
                
            });
        });   
    
        return { sortedList, searchQuery, filteredList }
    },
    async created(){
        const token = localStorage.getItem('token');
        const token_decoded = jwt_decode(token);
        const response = await axios.get(`Users/${token_decoded.nameid}`);
        await this.$store.dispatch('user', response.data.data);
    },
    async mounted(){
        const patientInfo = await axios.get('Patients');
        //const visitInfo = await axios.get('Visits');
        //console.log(visitInfo);
        this.patients = patientInfo.data.data;
        console.log(patientInfo)
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

    div.wrapper {
    margin: 40px 0;
    div.search {
        width: 300px;
        align-self: flex-end;

        @media (max-width: 768px) { 
            align-self: center;
        }

        div.input-group {
            input {
                background-image: url("@/assets/images/icons/svg/magnifying_glass.svg");
                background-repeat: no-repeat;
                background-position-x: 16px;
                background-position-y: 8px;
                background-color: $primary;
                border: 1px solid $secondary;
                padding-left: 48px;
                font-weight: 600;
                color: $secondary;

                &:focus {
                    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;
                }
            }
        }
    }
    div.table-responsive {
        border: 1px solid $button-light;
        border-radius: 10px;
        background-color: $primary;

        table {
            margin: 0;
            
            thead, tfoot, tbody {
                tr {
                    th, td {
                        text-align: left;
                    }
                }
            }
            thead, tfoot {
                tr {
                    &:hover {
                        background-color: transparent;
                    }
                    th {
                        padding: 24px;
                        font-weight: 600;
                        line-height: 18px;
                        color: $secondary;

                        &:last-child {
                            width: 200px;
                        }
                    }
                }
            }
            thead {
                tr {
                    border-radius: 0 15px 0 15px;
                }
            }
            tbody {
                tr {
                    &:hover {
                        background-color: $button-light-hover;
                    }
                    td {
                        padding: 16px 24px;
                        font-weight: 500;
                        vertical-align: middle;
                        font-size: 14px;
                        white-space: nowrap;
                        

                        span {
                            span {
                                vertical-align: middle;

                                &:first-child {
                                    margin-right: 16px;
                                }
                                &.status-icon {
                                    background-color: setStatus;
                                    width: 15px;
                                    height: 15px;
                                    display: inline-block;
                                    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                                    border-radius: 100%;
                                    box-sizing: border-box;
                                    margin-right: 10px;
                                    
                                }
                            }
                        }
                        
                        button {
                            border-radius: 5px;
                            padding: 2px 8px;
                            color: white;
                            font-weight: 500;
                            font-size: 13px;
                            line-height: 18px;
                            border: 0;
                            margin-right: 20px;
                            transition: all .2s ease-in-out;

                            &.blue-button {
                                background-color: $button-blue;

                                &:hover {
                                    background-color: $button-blue-hover;
                                }
                            }

                            &.teal-button {
                                background-color: $button-teal;

                                &:hover {
                                    background-color: $button-teal-hover;
                                }
                            }

                            &.red-button {
                                background-color: $button-red;

                                &:hover {
                                    background-color: $button-red-hover;
                                }
                            }       
                        }
                    }
                }
            }

            tfoot {
                tr {
                    th {
                        border: 0;
                        white-space: nowrap;
                        span.tfoot-text {
                            vertical-align: middle;
                            margin: 0 6px;
                        }
                        &:last-child {
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
}
</style>