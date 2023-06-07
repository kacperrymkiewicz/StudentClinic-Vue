import actions from "./actions.js"
import getters from "./getters.js"
import mutations from "./mutations.js"

export default {
    state(){
        return {
            user: null,
            accountType: null,
            isLoggedIn: false,
            patient: null,
            patientsList: [],
            visitsList: [],
            activePatient: null,
            patientVisitsList: [],
        }
    },
    actions, 
    getters,
    mutations,
}