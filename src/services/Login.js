import axios from 'axios';
import {hashPassword} from './hash.js';

export default {
  name: 'Login',

  components: {},

  data: function () {
    return {
      userName: '',
      password: '',
      errors: null
    }
 },
 

  methods: {
    fetchUsers() {
      const params = new URLSearchParams();
      params.append('userName', this.userName); // 0000100047
       params.append('password', hashPassword(this.password)); // 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8
      axios.post('http://62.173.32.30:8080/rc/rest/agent/login', params)
      .then(res=>{
        console.log(res);
        if(res) {
          const auth = res.headers.authorization
          localStorage.setItem('authorization', auth)
          // axios.defaults.headers.authorization = `${auth}`;
          
          this.$router.push({name: 'agent'});
        } 
       })

      .catch(e=>{
        if(e) {
          this.errors = 'Incorrect password entered, Please check your password and try again' 
          alert(this.errors)
        }
      })
      
    }
  } 
};