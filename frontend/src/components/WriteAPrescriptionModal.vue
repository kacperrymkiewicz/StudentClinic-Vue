<template>
    <div @click="$emit('closeWriteAPrescriptionModal')" class="overlay"></div>
    <dialog open>
        <div class="wrapper d-flex flex-column align-items-center">
            <img @click="$emit('closeWriteAPrescriptionModal')" class="close-button" src="@/assets/images/icons/svg/base_modal_close.svg">
            <p>Wypisz receptę dla:</p>
            <p>
                <img class="profile-icon" src="@/assets/images/icons/svg/profile.svg">
                <span>{{ data.user.firstName }} {{ data.user.lastName }}</span> 
            </p>
            <form @submit.prevent="submitForm"> 
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="drug">Lek</label>
                    <select class="form-select" id="drug">
                        <option selected disabled>Nie wybrano</option>
                        <option value="lorem 10mg">Lorem 10mg</option>
                        <option value="lorem 20mg">Lorem 20mg</option>
                        <option value="ipsum 10mg">Ipsum 10mg</option>
                        <option value="ipsum 20mg">Ipsum 20mg</option>
                        <option value="dolor 10mg">Dolor 10mg</option>
                        <option value="dolor 20mg">Dolor 20mg</option>
                    </select>
                </div>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="dosage">Dawkowanie</label>
                    <input class="form-control" id="dosage">
                </div>
                <div class="form-group d-flex flex-column">
                    <label class="align-self-start" for="recommendations">Zalecenia</label>
                    <textarea class="form-control" id="recommendations"></textarea>
                </div>
                <base-button type="dark" @click="submitForm()">Potwierdź</base-button>
                <base-button type="light" @click="$emit('closeWriteAPrescriptionModal')">Anuluj</base-button>
            </form>
        </div>
    </dialog>
</template>

<script>
export default {
    name: 'WriteAPrescription',
    emits: ['closeWriteAPrescriptionModal'],
    props: {
        data: {
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    methods: {
        submitForm(){

        }
    }
}
</script>

<style lang="scss" scoped>
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
        padding: 50px 60px 20px;
        position: relative;
        max-width: 600px;

        img {
            &.profile-icon {
                width: 40px;
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
            text-align: center;
            letter-spacing: -0.02em;
            color: #2E3646;

            &:first-of-type {
                font-weight: 600;
                font-size: 30px;
            }
            &:last-of-type {
                font-weight: 500;
                font-size: 26px;

                img {
                    margin-right: 15px;
                }

                span {
                    vertical-align: middle;
                }
            }
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
form {
    div.form-group {
        margin: 13px 0;
        width: 400px;

        label {
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
            color: $secondary;
            align-self: flex-start;
        }

        input, select, textarea {
            box-sizing: border-box;
            border: 1px solid #5F6D7E;
            border-radius: 8px;
            padding: 8px 18px;
            background: $primary;
        }

        textarea {
            resize: none;
        }
    }

    button {
        margin: 30px 15px;
    }
}
</style>