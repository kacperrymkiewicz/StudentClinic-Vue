<template>
    <section id="patient-appointment-app">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <hello-message icon-name="appointment"><template v-slot:info>Zarezerwuj wizytę do specjalisty</template></hello-message>
                    <div class="appointment-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="left-wrapper d-flex align-items-center flex-column">
                                    <div class="left-inner-wrapper d-flex flex-column align-items-center">
                                        <div class="form-group d-flex flex-column">
                                            <label class="align-self-start" for="specialization">Wybierz specjalizację</label>
                                            <select class="form-select" aria-label="Wybierz specjalistę" id="specialization">
                                                <option selected>Nie wybrano</option>
                                                <option value="1">Lorem</option>
                                                <option value="2">Lorem</option>
                                                <option value="3">Lorem</option>
                                            </select>
                                        </div>
                                        <div class="form-group d-flex flex-column">
                                            <label class="align-self-start" for="doctor">Wybierz lekarza</label>
                                            <select class="form-select" aria-label="Wybierz specjalistę" id="doctor">
                                                <option selected>Nie wybrano</option>
                                                <option value="1">Lorem</option>
                                                <option value="2">Lorem</option>
                                            </select>
                                        </div>

                                        <div class="appointment-date-picker d-flex flex-column">
                                            <div class="form-group d-flex flex-column">
                                                <label class="align-self-start">Wybierz termin</label>
                                                <div class="date-picker d-flex justify-content-evenly">
                                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0.5)" fill="white"/>
                                                        <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0.5)" fill="black" fill-opacity="0.2"/>
                                                        <path d="M17.5 8L10.8839 14.6161C10.3957 15.1043 10.3957 15.8957 10.8839 16.3839L17.5 23" stroke="#5F6D7E" stroke-width="1.5" stroke-linecap="round"/>
                                                    </svg>
                                                    <span>11 marca 2023</span>
                                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect y="0.5" width="30" height="30" rx="15" fill="white"/>
                                                        <rect y="0.5" width="30" height="30" rx="15" fill="black" fill-opacity="0.2"/>
                                                        <path d="M12.5 8L19.1161 14.6161C19.6043 15.1043 19.6043 15.8957 19.1161 16.3839L12.5 23" stroke="#5F6D7E" stroke-width="1.5" stroke-linecap="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <base-button class="base-button" type="light">09:00 - 09:30</base-button>
                                            <base-button type="light">09:30 - 10:00</base-button>
                                            <base-button type="light">10:00 - 10:30</base-button>
                                            <base-button type="light">10:30 - 11:00</base-button>
                                            <a href="#">Pokaż więcej godzin</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-wrapper d-flex flex-column">
                                    <div class="right-inner-wrapper d-flex flex-column align-items-center">
                                        <img src="@/assets/images/icons/doctor.png">
                                        <p>Twój lekarz:</p>
                                        <p> {{ doctor }}</p>
                                        <p> {{ specialization }}</p>
                                        <p><span>Termin:</span> {{ termin }} </p>
                                        <div class="d-flex">
                                            <p>Koszt wizyty:</p>
                                            <span> {{ price }} zł</span>
                                        </div>
                                        <base-button type="dark" :has-icon="true">Umów wizytę</base-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                doctor: 'Lorem Ipsum',
                specialization: 'Lorem',
                termin: 'nie wybrano',
                price: 100,
                
            }

        }
    }
</script>

<style lang="scss" scoped>

div.appointment-container {
    margin: 40px 0;
    padding: 50px 0;
    background-color: $primary;
    border-radius: 5px;
    border: 1px solid $button-light;

    div.left-wrapper {
        width: 100%;
        border-right: 1px solid $button-light;
        margin-bottom: 40px;

        @media (max-width: 992px) { 
            border-right: none;
        }

        div.left-inner-wrapper {
            @media (max-width: 992px) { 
                width: 80%;
                padding: 0 40px 40px;
                border-bottom: 1px solid $button-light;
            }

        
            div.form-group {
                margin: 13px 0;
                width: 300px;

            
            label {
                font-weight: 500;
                font-size: 14px;
                line-height: 30px;
                letter-spacing: -0.001em;
                color: $secondary;
                margin-bottom: 10px;

            }
            select {
                box-sizing: border-box;
                border: 1px solid #5F6D7E;
                border-radius: 8px;
                display: flex;
                padding: 8px 18px;
                gap: 16px;
                background-color: #F8F9FB;

            }
            
        }
        
        .appointment-date-picker {
            .date-picker {
                svg {
                    &:hover {
                        cursor: pointer;
                    }
                }
                span {
                    width: 160px;
                    line-height: 31px;
                }
            }
            .base-button {
                margin: 10px 0;
            }

            a {
                margin-top: 18px;
                color: $secondary;
                font-weight: 600;
                font-size: 15px;
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

    div.right-wrapper {
        height: 100%;
        justify-content: center;
        div.right-inner-wrapper{
            p:nth-child(2){
                text-transform: uppercase;
                color: $secondary;
                margin: 30px 0;
            }
            
            p:nth-child(5){
                margin-bottom: 30px;
            }

            img {
                width: 90px;
            }

            p {
                span {
                    font-weight: 600;
                }
            }

            div {
                width: 260px;
                border-top: 1px solid #D1D9E2;
                padding: 20px 0;
                justify-content: space-evenly;
                align-items: center;
                font-weight: 700;

                p {
                    margin-bottom: 0;
                }

                span {
                    background-color: $secondary;
                    padding: 2px 8px;
                    border-radius: 5px;
                    color: white;
                }
            }
        }
    }
}
</style>