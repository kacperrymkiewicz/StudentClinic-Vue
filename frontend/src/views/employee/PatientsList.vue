<template>
    <section id="patients-list">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <hello-message icon-name="agenda"><template v-slot:info>Oto lista zarezerwowanych wizyt przez pacjentów</template></hello-message>
                    <base-table :isPatientsListView="true" :fields="fields" :data="data" :status="status"></base-table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        setup(){
            const data = [
                {pacjent: "Grzegorz Floryda"},
                {pacjent: "Lorem Ipsum"},
            ]
            const fields = [
                'pacjent', 'akcje'
            ]
            return { data, fields }
        }
    }
</script>

<style lang="scss" scoped>
    //
</style>