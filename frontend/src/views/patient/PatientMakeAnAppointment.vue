<template>
    <section id="patient-appointment-app">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <hello-message icon-name="clipboard"><template v-slot:info>Zarezerwuj wizytę do specjalisty</template></hello-message>
                    <div class="appointment-container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="wrapper d-flex align-items-center flex-column">
                                    <div class="form-group d-flex flex-column">
                                        <label class="align-self-start" for="specialization">Wybierz specjalizację</label>
                                        <select class="form-select" aria-label="Wybierz specjalistę" id="specialization">
                                            <option selected>Okulista</option>
                                            <option value="1">Dentysta</option>
                                            <option value="2">Urolog</option>
                                            <option value="3">Pediatra</option>
                                        </select>
                                    </div>
                                    <div class="form-group d-flex flex-column">
                                        <label class="align-self-start" for="doctor">Wybierz lekarza</label>
                                        <select class="form-select" aria-label="Wybierz specjalistę" id="doctor">
                                            <option selected>Jan Woźniak</option>
                                            <option value="1">Marek</option>
                                            <option value="2">Jurek</option>
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
                            <div class="col-md-6">
                                <span>Twój lekarz:</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.wrapper {
    width: 100%;
    border-right: 1px solid #D1D9E2;
    padding-bottom: 20px;
    .form-group {
        margin: 13px 0;
        width: 350px;
    
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
        span {
            width: 160px;
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