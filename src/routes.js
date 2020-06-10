import Login from './components/login/Login.vue';
import Agent from './components/agent/Agent.vue';

const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/agents', name: 'agent', component: Agent, meta: {requiresAuth: true}}
];

export default routes;