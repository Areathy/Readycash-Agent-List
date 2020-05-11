import Login from './services/Login.vue';
import Agent from './components/agent/Agent.vue';

const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/agents', name: 'agent', component: Agent}
];

export default routes;