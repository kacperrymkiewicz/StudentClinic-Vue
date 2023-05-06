<template>
    <section id="patient-prescriptions">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <hello-message icon-name="receipt"><template v-slot:info>Oto lista Twoich recept wraz z zaleceniami lekarskimi</template></hello-message>
                    <base-card :has-button="true">
                        <template v-slot:title>Recepta z dnia {{ date }} o {{ time }}</template>
                        <template v-slot:content>Lekarz: {{ doctor }}</template>
                        <template v-slot:button>Pokaż szczegóły recepty</template>
                    </base-card>
                    <base-card :has-button="true">
                        <template v-slot:title>Recepta z dnia {{ date }} o {{ time }}</template>
                        <template v-slot:content>Lekarz: {{ doctor }}</template>
                        <template v-slot:button>Pokaż szczegóły recepty</template>
                    </base-card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                date: new Date().toISOString().slice(0, 10),
                time: "9:30",
                doctor: "Lorem Ipsum"
            }
        }
    }
</script>