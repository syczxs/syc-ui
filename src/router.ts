import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwichDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import DocDemo from './components/Doc.vue'

import Intro from './views/Intro.vue'
import GetStart from './views/GetStart.vue'
import Install from './views/Install.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                {path:'',component:DocDemo},
                {path:'intro',component:Intro},
                {path:'get-start',component:GetStart},
                {path:'install',component:Install},
                { path: 'switch', component: SwichDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'tabs', component: TabsDemo },
                { path: 'dialog', component: DialogDemo },
            ]
        }
    ]
})

