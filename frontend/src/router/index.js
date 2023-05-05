import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";

// pacjent
import PatientMakeAnAppointment from "../views/patient/PatientMakeAnAppointment.vue";
import PatientRecommendations from "../views/patient/PatientRecommendations.vue"
import PatientVisits from "../views/patient/PatientVisits.vue";
import PatientProfile from "../views/patient/PatientProfile.vue";
import PatientProfileEdit from "../views/patient/PatientProfileEdit.vue";
import PatientProfileEditPassword from "../views/patient/PatientProfileEditPassword.vue";
import ReceptionistPanelVisits from "../views/worker/ReceptionistPanelVisits";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/logowanie",
    name: "login",
    component: LoginView,
  },
  {
    path: "/rejestracja",
    name: "signup",
    component: SignUpView,
  },
  // pacjent
  {
    path: "/wizyty",
    name: "patient-visits",
    component: PatientVisits,
  },
  {
    path: "/zalecenia",
    name: "recommendations",
    component: PatientRecommendations,
  },
  {
    path: "/umow-wizyte",
    name: "patient-make-an-appointment",
    component: PatientMakeAnAppointment,
  },
  {
    path: "/profil",
    name: "patient-profile",
    component: PatientProfile,
  },
  {
    path: "/profil/edycja-profilu",
    name: "patient-profile-edit",
    component: PatientProfileEdit,
  },
  {
    path: "/profil/edycja-hasla",
    name: "patient-profile-edit-password",
    component: PatientProfileEditPassword,
  },
  //Pracownicy
  {
    path: "/recepcja",
    name: "Panel Recepcji",
    component: ReceptionistPanelVisits,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
});

export default router;
