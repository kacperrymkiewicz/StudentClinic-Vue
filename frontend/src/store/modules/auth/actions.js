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

    // isLoggedIn(context, isLoggedIn) {
    //     context.commit('isLoggedIn', isLoggedIn)
    // },
};