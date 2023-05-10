<template>
    <div class="searchBar">
      <div class="input-group mb-5">
        <input type="search" class="form-control" v-model='searchQuery' placeholder="Wyszukaj">
      </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th v-for="field in fields" :key='field'> {{ field }} </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in filteredList" :key='item'>
                <td v-for="field in fields.slice(0, fields.length-1)" :key='field'> {{ capitalizeFirstLetter(item[field]) }} </td>
                <td><slot name="buttons"></slot></td>
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
</template>

<script>
import { computed, ref } from "vue";

export default {
name: 'BaseTable',
  props:{
      data:{
          type: Array,
      },
      fields:{
          type: Array,
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
</style>