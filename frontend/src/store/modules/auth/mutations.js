export default {
    user (state, user) {
        state.user = user;
    },
    patient (state, patient) {
        state.patient = patient;
    },
    isLoggedIn(state, isLoggedIn){
        state.isLoggedIn = isLoggedIn;
    }
};