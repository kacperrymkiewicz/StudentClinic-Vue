export default {
    user (state, user) {
        state.user = user;
    },
    patient (state, patient) {
        state.patient = patient;
    },
    patientsList (state, patients) {
        state.patientsList = patients
    },
    visitsList (state, visits) {
        state.visitsList = visits
    }
    // isLoggedIn(state, isLoggedIn){
    //     state.isLoggedIn = isLoggedIn;
    // }
};