<template>
  <section id="receptionist-patients-visits">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <breadcrumbs>
                      <router-link to="/lekarz/kalendarz-wizyt">Kalendarz wizyt</router-link>
                  </breadcrumbs>
                  <hello-message v-if="user" :name="user.firstName" icon-name="reminder">
                      <template v-slot:info>Oto Twój kalendarz wizyt</template>
                  </hello-message>
                  <div class="wrapper d-flex flex-column">
                      <div class="table-responsive d-flex flex-column">  
                          <table class="table">
                              <thead>
                                  <tr>
                                      <th v-for="field in fields" :key='field'> {{ capitalizeFirstLetter(field) }} </th>
                                  </tr>
                              </thead>
                              <tbody v-if="visitsList.length > 0">
                                  <tr v-for="visit in this.visitsList" :key="visit.id">
                                      <td v-for="field in fields" :key='field'>
                                          <span v-if="field == 'data'">
                                              <span>
                                                  {{ new Date(visit.date).toLocaleDateString('pl', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }}
                                              </span>
                                          </span>
                                          <span v-else-if="field == 'godzina'">
                                              Od {{ visit.slot.startTime.slice(0, 5) }} do {{ visit.slot.endTime.slice(0, 5) }}
                                          </span>
                                          <span v-else-if="field == 'pacjent'">
                                              <span>
                                                  <img src="@/assets/images/icons/svg/profile.svg">
                                              </span>
                                              <span>
                                                  {{ capitalizeFirstLetter(visit.patient.user.firstName) }} {{  capitalizeFirstLetter(visit.patient.user.lastName) }}   
                                              </span>
                                          </span>
                                          <span v-else-if="field == 'status'">
                                              <span class="status-icon" :style="{backgroundColor: setStatusIcon(visit.status)}"></span>
                                              <span class="status-text">{{ capitalizeFirstLetter(setStatus(visit.status)) }}</span>
                                          </span>
                                      </td>
                                  </tr>
                              </tbody>
                              <tbody class="no-results" v-else>
                                  <tr>
                                      <td colspan="6">Brak umówionych wizyt</td>
                                  </tr>
                              </tbody>
                              <tfoot>
                                  <tr>
                                      <th>
                                          <span class="tfoot-icon">
                                              <img src="@/assets/images/icons/svg/table_arrow_left.svg">
                                          </span>
                                          <span class="tfoot-text">Poprzednia strona</span></th>
                                      <th v-for="field in fields.length-2" :key="field"></th>  
                                      <th>
                                          <span class="tfoot-text">Następna strona</span>
                                          <span class="tfoot-icon">
                                              <img src="@/assets/images/icons/svg/table_arrow_right.svg">
                                          </span>
                                      </th>
                                  </tr>
                              </tfoot>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex';
import { useToast } from "vue-toastification";
import jwt_decode from "jwt-decode";
// import { computed, ref } from "vue";

export default {
  setup() {
      const toast = useToast();
      return { toast }
  },
  data(){
      return {
          fields: ['data', 'godzina', 'pacjent', 'status'],
          visitsList: [],
          tokenDecoded: null,
      }
  },  
  computed: {
      ...mapGetters(['user', 'visitsList']),
  },
  
  methods: {
      async getVisits() {
          const getVisitsInfo = await axios.get(`Doctors/${this.tokenDecoded.roleId}/Visits`);
          this.visitsList = getVisitsInfo.data.data;
          console.log(this.visitsList);
          console.log(this.tokenDecoded.roleId);
      },

      async cancelVisit(id){
          await axios.get(`Visits/${id}/Cancel`);
          this.toast("Wizyta została odwołana", {
              timeout: 2500,
              position: "bottom-right",
          });
          this.getVisits();
      },
      async confirmVisit(id){
          await axios.get(`Visits/${id}/Confirm`)
          this.toast("Wizyta została potwierdzona", {
              timeout: 2500,
              position: "bottom-right",
          });
          this.getVisits();
      },
      setStatus(status){
          switch(status){
              case 'Confirmed':
                  return "Potwierdzona"
              case 'Unconfirmed':
                  return "Niepotwierdzona"
              case 'Canceled':
                  return "Odwołana"
              case 'Finished':
                  return "Zakończona"
              default:
                  return "niezdefiniowany"
          }
      },
      setStatusIcon(status) {
          switch(status) {
              case 'Confirmed':
                  return "#209420";
              case 'Unconfirmed':
                  return "#F8EE12"
              case 'Canceled':
                  return "#F84912";
              case 'Finished':
                  return "#205594"
              default:
                  return "#FFF";
          }
      },
  },
  async created(){
      const token = localStorage.getItem('token');
      this.tokenDecoded = jwt_decode(token);
      this.getVisits();
  },
}
</script>

<style lang="scss" scoped>
div.wrapper {
  margin: 40px 0;
  div.search {
      width: 300px;
      align-self: flex-end;

      @media (max-width: 768px) { 
          align-self: center;
      }

      div.input-group {
          input {
              background-image: url("@/assets/images/icons/svg/magnifying_glass.svg");
              background-repeat: no-repeat;
              background-position-x: 16px;
              background-position-y: 8px;
              background-color: $primary;
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
  div.table-responsive {
      border: 1px solid $button-light;
      border-radius: 10px;
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

                      &:last-child {
                          width: 200px;
                      }
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
                          border-radius: 5px;
                          padding: 2px 8px;
                          color: white;
                          font-weight: 500;
                          font-size: 13px;
                          line-height: 18px;
                          border: 0;
                          margin-right: 20px;
                          transition: all .2s ease-in-out;

                          &.disabled-teal-button {
                              cursor: not-allowed;
                              background-color: $button-teal-hover !important;
                          }
                          &.disabled-red-button {
                              cursor: not-allowed;
                              background-color: $button-red-hover !important; 
                          }
                          &.blue-button {
                              background-color: $button-blue;

                              &:hover {
                                  background-color: $button-blue-hover;
                              }
                          }

                          &.teal-button {
                              background-color: $button-teal;

                              &:hover {
                                  background-color: $button-teal-hover;
                              }
                          }

                          &.red-button {
                              background-color: $button-red;

                              &:hover {
                                  background-color: $button-red-hover;
                              }
                          }       
                      }
                  }
              }

              &.no-results {
                  tr {
                      td {
                          text-align: center;
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
}
</style>