import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";

// pacjent
import PatientMakeAnAppointment from "../views/patient/PatientMakeAnAppointment.vue";
import PatientPrescriptions from "../views/patient/PatientPrescriptions.vue"
import PatientVisits from "../views/patient/PatientVisits.vue";
import PatientProfile from "../views/patient/PatientProfile.vue";
import PatientProfileEdit from "../views/patient/PatientProfileEdit.vue";
import PatientProfileEditPassword from "../views/patient/PatientProfileEditPassword.vue";

// pracownik
import ReceptionistPatientsVisits from "../views/employee/ReceptionistPatientsVisits.vue";
import PatientsList from "../views/employee/PatientsList.vue";

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
    path: "/moje-wizyty",
    name: "patient-visits",
    component: PatientVisits,
  },
  {
    path: "/recepty",
    name: "patient-prescriptions",
    component: PatientPrescriptions,
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

  // pracownik
  {
    path: "/wizyty",
    name: "receptionist-patients-visits",
    component: ReceptionistPatientsVisits,
  },
  {
    path: "/pacjenci",
    name: "patients-list",
    component: PatientsList,
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
