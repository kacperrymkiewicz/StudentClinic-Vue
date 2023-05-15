<template>
    <section id="patient-visits">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <breadcrumbs is-patient>
                        <router-link to="/moje-wizyty">Moje wizyty</router-link>
                    </breadcrumbs>
                    <hello-message icon-name="reminder"><template v-slot:info>Oto lista Twoich wizyt</template></hello-message>
                    <base-table :isPatientView="true" :fields="fields" :data="data" :status="status"></base-table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        setup(){
            const data = [
                {data:new Date().toISOString().slice(0, 10), lekarz: "Lorem Ipsum", specjalizacja: "lorem", status: "zakończona"},
                {data:new Date().toISOString().slice(0, 10), lekarz: "Lorem Ipsum", specjalizacja: "lorem", status: "odwołana"},
            ]
            const fields = [
                'data', 'lekarz', 'specjalizacja', 'status', 'akcje'
            ]
            return { data, fields }
        }
    }
</script>

<style lang="scss" scoped>
    div.table-responsive {
        margin: 40px 0;
    }
</style>