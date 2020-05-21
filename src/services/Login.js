import api from '../apis/readycash'
import {hashPassword} from './hash.js';
import 'vuejs-noty/dist/vuejs-noty.css';


export default {
  name: 'Login',

  components: {},

  data: function () {
    return {
      userName: '', //0000100047
      password: '',
      errors: null
    }
 },
 

  methods: {
    fetchUsers() {
       const params = new URLSearchParams();
       params.append('userName', this.userName); 
       params.append('password', hashPassword(this.password)); 
        api.post('/agent/login', params)
       .then((response) =>{
          localStorage.setItem('authorization', response.headers.authorization)
          this.$router.push({name: 'agent'}) })
       .catch( (error) => {
          this.errors = this.$noty.error(error.response.data.message, {
            timeout: 5000,
            layout: 'topCenter',
            theme: "metroui",
          })
      })
    }
  } 
};