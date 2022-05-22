import { createRouter,createWebHistory} from 'vue-router'
import ElementTest from '../components/ElementTest.vue'
import MainPage from '../components/MainPage.vue'
import CompanyInfo from '../components/CompanyInfo.vue'
import CompanyInput from '../components/CompanyInput.vue'
import UserSearch from '../components/UserSearch.vue'
import UserOrder from '../components/UserOrder.vue'
import CompanyOrder from '../components/CompanyOrder.vue'
import MangerService from '../components/MangerService.vue'
import MangerOrder from '../components/MangerOrder.vue'
import ExpertUpload from '../components/ExpertUpload.vue'
import UserEval from '../components/UserEval.vue'
import LogIn from '../components/LogIn.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/test', component: ElementTest },
        { path: '/companyinfo', component: CompanyInfo },
        { path: '/companyinput', component: CompanyInput },
        { path: '/companyorder', component: CompanyOrder },
        { path: '/usersearch', component: UserSearch },
        { path: '/userorder', component: UserOrder },
        { path: '/usereval', component: UserEval },

        { path: '/mangerservice', component: MangerService },
        { path: '/mangeorder', component: MangerOrder },
        { path: '/expertupload', component: ExpertUpload },
        { path: '/login', component: LogIn},

    ]
})

export default router

