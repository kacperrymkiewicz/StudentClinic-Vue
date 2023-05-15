<template>
    <section id="receptionist-patients-visits">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <breadcrumbs>
                        <router-link to="/wizyty">Wizyty</router-link>
                    </breadcrumbs>
                    <hello-message icon-name="reminder"><template v-slot:info>Oto lista zarezerwowanych wizyt przez pacjentów</template></hello-message>
                    <base-table :fields="fields" :data="data" :status="status"></base-table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        setup(){
            const data = [
                {data:new Date().toISOString().slice(0, 10), pacjent: "Abiola Esther", lekarz: "Lorem Ipsum", specjalizacja: "lorem", status: "zakończona"},
                {data:new Date().toISOString().slice(0, 10), pacjent: "Lorem Esther", lekarz: "Lorem Ipsum", specjalizacja: "lorem", status: "odwołana"},
            ]
            const fields = [
                'data', 'pacjent', 'lekarz', 'specjalizacja', 'status', 'akcje'
            ]
            return { data, fields }
        }
    }
</script>
