export default {
    user: state => {
        return state.user;
    },
    patient: state => {
        return state.patient;
    },
    patientsList: state => {
        return state.patientsList;
    },
    visitsList: state => {
        return state.visitsList;
    },
    activePatient: state => {
        return state.activePatient
    },
    patientVisitsList: state => {
        return state.patientVisitsList
    },
    isLoggedIn: state => {
        return state.isLoggedIn;
    },
    accountType: state => {
        return state.accountType;
    },
}