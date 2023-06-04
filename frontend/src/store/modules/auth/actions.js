export default {
    user(context, user) {
        context.commit('user', user)
    },
    patient(context, user) {
        context.commit('patient', user)
    },
    isLoggedIn(context, isLoggedIn) {
        context.commit('isLoggedIn', isLoggedIn)
    }
};