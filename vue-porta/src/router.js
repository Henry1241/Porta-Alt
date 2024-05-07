import { createWebHistory, createRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginView from './views/LoginView.vue'
import HomeView from './views/HomeView.vue'
import RegisterView from './views/RegisterView.vue'
import ResetView from './views/ResetView.vue'
import ProprietyView from './views/ProprietyView'
import ProprietyCreateFormView from './views/Propriety/ProprietyCreateFormView'
import ContructionPageView from './views/ContructionPageView'

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/register',
    component: RegisterView
  },
  {
    path: '/reset',
    component: ResetView
  },
  {
    path: '/propriety',
    component: ProprietyView
  },
  {
    path: '/propriety/create',
    component: ProprietyCreateFormView
  },
  {
    path: '/contruction',
    component: ContructionPageView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async(to, from, next) =>{
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
       next();
    }else{
      alert("Usted no tiene acceso");
      next("/")
    }
  } else {
    next();
  }
});

export default router