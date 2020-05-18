import axios from 'axios';
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
      params.append('userName', this.userName); // 0000100047 
       params.append('password', hashPassword(this.password)); 
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
          // this.errors = 'Incorrect password entered, Please check your password and try again' 
          // alert(this.errors)
          this.errors = this.$noty.error('Incorrect password entered, Please check your password and try again', {
            timeout: 5000,
            layout: 'topCenter',
            theme: "metroui",
          })

        }
      })

      // Error message
      // this.$noty.error("Oops, something went wrong!")

      
    }
  } 
};