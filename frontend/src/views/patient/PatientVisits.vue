<template>
    <section id="patient-visits">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <hello-message icon-name="reminder"><template v-slot:info>Oto lista Twoich wizyt</template></hello-message>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Data</th>
                                    <th scope="col">Lekarz</th>
                                    <th scope="col">Specjalizacja</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {{ date }}
                                    </td>
                                    <td>
                                        <span>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" rx="16" fill="#5F6D7E"/>
                                                <path d="M16 17.1667C17.6109 17.1667 18.9167 15.8608 18.9167 14.25C18.9167 12.6392 17.6109 11.3333 16 11.3333C14.3892 11.3333 13.0834 12.6392 13.0834 14.25C13.0834 15.8608 14.3892 17.1667 16 17.1667ZM16 17.1667C13.4227 17.1667 11.3334 18.7337 11.3334 20.6667M16 17.1667C18.5774 17.1667 20.6667 18.7337 20.6667 20.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                            </svg>
                                        </span>
                                        <span>{{ doctor }}</span>
                                    </td>
                                    <td> {{ specialization }}</td>
                                    <td> {{ status }}</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Poprzednia strona</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>Następna strona</th>
                                </tr>
                            </tfoot>
                        </table>
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
                date: new Date().toISOString().slice(0, 10),
                doctor: "Lorem Ipsum",
                specialization: "Lorem",
                status: "confirmed",


            }
        }
    }
</script>

<style lang="scss" scoped>
    div.table-responsive {
        table {
            thead, tfoot {
                tr {
                    th {
                        padding: 24px;
                        font-weight: 600;
                        line-height: 18px;
                        color: $secondary;
                    }
                }
            }

            tbody {
                tr {
                    td {
                        padding: 16px 24px;
                        font-weight: 500;

                        span {
                            &:first-child {
                                margin-right: 16px;
                            }
                        }
                    }
                }
            }

            tfoot {
                tr {
                    th {
                        border: 0;
                    }
                }
            }
        }
    }

</style>