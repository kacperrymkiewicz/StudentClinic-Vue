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
                                    <td> 
                                        {{ specialization }}</td>
                                    <td>
                                        <span :style="{backgroundColor: setStatusIcon}" class="tbody-icon"></span><span class="tbody-text"> {{ capitalize(status) }}</span>
                                    </td>
                                    <td>
                                        <button>Odwołaj wizytę</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>
                                        <span class="tfoot-icon">
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.8335 6H2.00012M6.16679 1L1.75604 5.41074C1.4306 5.73618 1.4306 6.26382 1.75604 6.58926L6.16679 11" stroke="#5F6D7E" stroke-width="1.5" stroke-linecap="round"/>
                                            </svg>
                                        </span>
                                        <span class="tfoot-text">Poprzednia strona</span></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>
                                        <span class="tfoot-text">Następna strona</span>
                                        <span class="tfoot-icon">
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.16675 6H12.0001M7.83342 1L12.2442 5.41074C12.5696 5.73618 12.5696 6.26382 12.2442 6.58926L7.83342 11" stroke="#5F6D7E" stroke-width="1.5" stroke-linecap="round"/>
                                            </svg>
                                        </span>
                                    </th>
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
                status: "czeka na potwierdzenie",
            }
        },
        computed: {
            setStatusIcon() {
                switch(this.status) {
                    case 'zakończona':
                        return "#205594"
                    case 'potwierdzona':
                        return "#209420";
                    case 'odwołana':
                        return "#F84912";
                    case 'czeka na potwierdzenie':
                        return "#F8EE12"
                    default:
                        return "#FFF";
                }
            }
        },
        methods: {
            capitalize(str){
                return str.charAt(0).toUpperCase() + str.slice(1);;
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
                        vertical-align: middle;
                        font-size: 14px;
                        white-space: nowrap;

                        span {
                            &:first-child {
                                margin-right: 16px;
                            }
                            &.tbody-icon {
                                background-color: setStatus;
                                width: 15px;
                                height: 15px;
                                display: inline-block;
                                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                                border-radius: 100%;
                                box-sizing: border-box;
                                margin-right: 10px;
                                vertical-align: middle;
                            }

                        }
                        button {
                            background-color: #BB1313;
                            border-radius: 5px;
                            padding: 2px 8px;
                            color: white;
                            font-weight: 500;
                            font-size: 13px;
                            line-height: 18px;
                            border: 0;
                            transition: all .2s ease-in-out;

                            &:hover {
                                background-color: #CA5F5F;
                            }
                        }
                    }
                }
            }

            tfoot {
                tr {
                    th {
                        border: 0;
                        white-space: nowrap;
                        span.tfoot-text {
                            vertical-align: middle;
                            margin: 0 6px;
                        }
                    }
                }
            }
        }
    }

</style>