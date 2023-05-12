<template>
    <div v-if="!isPatientView" class="search">
      <div class="input-group mb-5">
        <input type="search" class="form-control" v-model='searchQuery' placeholder="Wyszukaj...">
      </div>
    </div>
    <div class="table-wrapper">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="field in fields" :key='field'> {{ capitalizeFirstLetter(field) }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredList" :key='item'>
                    <td v-for="field in fields" :key='field'> 
                        <span v-if="field=='lekarz' || field == 'pacjent'">
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#5F6D7E"/>
                                    <path d="M16 17.1667C17.6109 17.1667 18.9167 15.8608 18.9167 14.25C18.9167 12.6392 17.6109 11.3333 16 11.3333C14.3892 11.3333 13.0834 12.6392 13.0834 14.25C13.0834 15.8608 14.3892 17.1667 16 17.1667ZM16 17.1667C13.4227 17.1667 11.3334 18.7337 11.3334 20.6667M16 17.1667C18.5774 17.1667 20.6667 18.7337 20.6667 20.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </span>
                            <span>
                                {{ capitalizeFirstLetter(item[field]) }}
                            </span>
                        </span>
                        <span v-else-if="field=='status'">
                            <span class="status-icon" :style="{backgroundColor: setStatusIcon(item[field])}" ></span>
                            <span class="status-text">{{ capitalizeFirstLetter(item[field])}}</span>
                        </span>
                        <button v-else-if="field=='akcje' && isPatientView">Anuluj</button>
                        <span v-else-if="field=='akcje'">
                            <button>Odwołaj</button>
                            <button>Potwierdź</button>
                        </span> 
                        <span v-else>{{ capitalizeFirstLetter(item[field]) }} </span> 
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
                    <th v-for="field in fields.length-2" :key="field"></th>  
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
</template>

<script>
import { computed, ref } from "vue";

export default {
name: 'BaseTable',
  props:{
      data: {
            type: Array,
      },
      fields:{
            type: Array,
      },
      isPatientView: {
            type: Boolean,
            required: false,
            default: false 
      }
  },
  methods: {
        setStatusIcon(status) {
            switch(status) {
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
  setup(props) {
    let sort = ref(false);
    let updatedList =  ref([])
    let searchQuery = ref("");
    
    const sortedList = computed(() => {
      if (sort.value) {
         return updatedList.value
      } else {
         return props.data;
      }
    });

    const filteredList = computed(() => {
        return sortedList.value.filter((product) => {
            return (
                product.pacjent.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
            );
        });
    });   
      
    return {sortedList, searchQuery, filteredList}
  }
}
</script>

<style lang="scss" scoped>

div.search {
    width: 300px;
    align-self: flex-end;

    div.input-group {
        input {
            background-image: url("@/assets/images/icons/svg/magnifying_glass.svg");
            background-repeat: no-repeat;
            background-position-x: 16px;
            background-position-y: 8px;
            border: 1px solid $secondary;
            padding-left: 48px;
            font-weight: 600;
            color: $secondary;

            &:focus {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;
            }
        }
    }
}
div.table-wrapper {
    border-radius: 10px;
    border: 1px solid $button-light;
    background-color: $primary;

    table {
        margin: 0;
        

        thead, tfoot, tbody {
            tr {
                
                th, td {
                    text-align: left;

                }
            }
        }
        thead, tfoot {
            tr {
                &:hover {
                    background-color: transparent;
                }
                th {
                    padding: 24px;
                    font-weight: 600;
                    line-height: 18px;
                    color: $secondary;
                }
            }
        }
        thead {
            tr {
                border-radius: 0 15px 0 15px;
            }
        }
        tbody {
            tr {
                &:hover {
                    background-color: $button-light-hover;
                }
                td {
                    padding: 16px 24px;
                    font-weight: 500;
                    vertical-align: middle;
                    font-size: 14px;
                    white-space: nowrap;
                    

                    span {
                        span {
                            vertical-align: middle;

                            &:first-child {
                                margin-right: 16px;
                            }
                            &.status-icon {
                                background-color: setStatus;
                                width: 15px;
                                height: 15px;
                                display: inline-block;
                                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                                border-radius: 100%;
                                box-sizing: border-box;
                                margin-right: 10px;
                                
                            }
                        }
                    }
                    
                    button {
                        background-color: $button-red;
                        border-radius: 5px;
                        padding: 2px 8px;
                        color: white;
                        font-weight: 500;
                        font-size: 13px;
                        line-height: 18px;
                        border: 0;
                        margin-right: 20px;
                        transition: all .2s ease-in-out;

                        &:hover {
                            background-color: $button-red-hover;
                        }

                        &:nth-of-type(2){
                            background-color: $button-teal;

                            &:hover {
                                background-color: $button-teal-hover; 
                            }
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
                    &:last-child {
                        text-align: right;
                    }
                }
            }
        }
    }
}

</style>