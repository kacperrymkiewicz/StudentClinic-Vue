<template>
    <section id="patient-appointment-app">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <hello-message icon-name="appointment"><template v-slot:info>Zarezerwuj wizytę do specjalisty</template></hello-message>
                    <div class="appointment-container">
                        <div class="row">
                            <div class="col-md-6">
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
                                        <span>11 marca 2023</span>
                                    </div>
                                    <base-button type="light">09:00 - 09:30</base-button>
                                    <base-button type="light">09:30 - 10:00</base-button>
                                    <base-button type="light">10:00 - 10:30</base-button>
                                    <base-button type="light">10:30 - 11:00</base-button>
                                    <a href="#">Pokaż więcej godzin</a>
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

.form-group {
    margin: 13px 0;

    label {
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        letter-spacing: -0.001em;
        color: $secondary;

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