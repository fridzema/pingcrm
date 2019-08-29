import {
    InertiaApp
} from '@inertiajs/inertia-vue'
import PortalVue from 'portal-vue'
import Vue from 'vue'

Vue.config.productionTip = false
Vue.use(InertiaApp)
Vue.use(PortalVue)

import route from '../../vendor/tightenco/ziggy/dist/js/route.min.js';
import {
    Ziggy
} from './ziggy';

// For use with jquery
window.Ziggy = Ziggy;
window.route = route;

Ziggy.baseUrl = location.protocol + '//' + location.hostname;
Ziggy.baseProtocol = location.protocol;
Ziggy.baseDomain = location.hostname;

Vue.mixin({
    methods: {
        route: route
    }
})

let app = document.getElementById('app')

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
