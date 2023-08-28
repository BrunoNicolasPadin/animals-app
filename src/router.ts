import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		alias: '/home'
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior (to, from, savedPosition) {
		return savedPosition || { top:0 }
	}
})

export default router