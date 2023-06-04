import actions from "./actions.js"
import getters from "./getters.js"
import mutations from "./mutations.js"

export default {
    state(){
        return {
            user: null,
            accountType: null,
            isLoggedIn: true,
            patient: null
        }
    },
    actions, 
    getters,
    mutations,
}