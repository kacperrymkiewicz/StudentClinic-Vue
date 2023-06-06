export default {
    user(context, user) {
        context.commit('user', user)
    },
    patient(context, user) {
        context.commit('patient', user)
    },
    patientsList(context, patients){
        context.commit('patientsList', patients)
    },
    visitsList(context, visits) {
        context.commit('visitsList', visits)
    }

    // isLoggedIn(context, isLoggedIn) {
    //     context.commit('isLoggedIn', isLoggedIn)
    // },
};