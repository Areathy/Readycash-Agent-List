import api from '../apis/readycash'
import {hashPassword} from './hash.js';
import 'vuejs-noty/dist/vuejs-noty.css';

export default {
  name: 'Login',

  components: {},

  data: function () {
    return {
      userName: '',
      password: '', // 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8
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
          console.log(error.message)
          this.errors = this.$noty.error('Incorrect password entered, Please check your password and try again', {
            timeout: 5000,
            layout: 'topCenter',
            theme: "metroui",
          })
      })
    }
  } 
};