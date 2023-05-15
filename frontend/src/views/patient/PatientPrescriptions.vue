<template>
    <section id="patient-prescriptions">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <breadcrumbs is-patient>
                        <router-link to="/recepty">Recepty</router-link>
                    </breadcrumbs>
                    <hello-message icon-name="receipt"><template v-slot:info>Oto lista Twoich recept wraz z zaleceniami lekarskimi</template></hello-message>
                    <div class="row">
                        <div class="col-md-6">
                            <base-card class="base-card" @click="toggleModalIsOpen">
                                <template v-slot:title>Recepta z dnia {{ date }}</template>
                                <template v-slot:content>Lekarz: {{ doctor_name }} ({{ doctor_specialization }})</template>
                            </base-card>
                        </div>
                        <div class="col-md-6">
                            <base-card class="base-card" @click="toggleModalIsOpen">
                                <template v-slot:title>Recepta z dnia {{ date }}</template>
                                <template v-slot:content>Lekarz: {{ doctor_name }} ({{ doctor_specialization }})</template>
                            </base-card>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <base-card class="base-card" @click="toggleModalIsOpen">
                                <template v-slot:title>Recepta z dnia {{ date }}</template>
                                <template v-slot:content>Lekarz: {{ doctor_name }} ({{ doctor_specialization }})</template>
                            </base-card>
                        </div>
                        <div class="col-md-6">
                            <base-card class="base-card" @click="toggleModalIsOpen">
                                <template v-slot:title>Recepta z dnia {{ date }}</template>
                                <template v-slot:content>Lekarz: {{ doctor_name }} ({{ doctor_specialization }})</template>
                            </base-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div v-if="modalIsOpen">
        <base-modal @close="toggleModalIsOpen">
            <template v-slot:title>Recepta z dnia {{ this.date }}</template>
            <template v-slot:subtitle>{{ drug_name + " " + drug_size}}</template>
            <template v-slot:content>
                <p><span>Odpłatność: </span> {{ this.fee }}</p>
                <p><span>Dawkowanie: </span> {{ this.dosage }}</p>
                <p><span>Kod recepty: </span> {{ this.receipt_code }}</p>
                <p><span>Wystawca: </span> {{ this.issuer }}</p>
                <p><span>Zalecenia: </span> {{ this.recommendations }}</p>
            </template>
        </base-modal>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                date: new Date().toISOString().slice(0, 10),
                time: "9:30",
                doctor_name: "Lorem Ipsum",
                doctor_specialization: "lorem",
                drug_name: "Lorem Ipsum",
                drug_size: "0.5g",
                fee: "100%",
                dosage: "Lorem ipsum",
                receipt_code: "Lorem ipsum",
                issuer: "Lorem ipsum",
                recommendations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor.",
                modalIsOpen: false,
            }
        },
        methods: {
            toggleModalIsOpen() {
                return this.modalIsOpen = !this.modalIsOpen;
            }
        }
    }
</script>

<style lang="scss" scoped>
div.container {
    div.base-card {
        padding: 0 20px;
        margin: 30px 0;
    }
}
        
</style>