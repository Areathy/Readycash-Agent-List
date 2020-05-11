import axios from "axios";

export default {
  name: "Login",

  data: function () {
    return {
      userName: '',
      password: ''
    }
 },
 

  methods: {
    fetchUsers() {
      const params = new URLSearchParams();
      params.append('userName', this.userName); // 0000100047
      params.append('password', this.password); // 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8
      axios.post('http://62.173.32.30:8080/rc/rest/agent/login', params)
      .then(res=>{
        if(res) {
          const auth = res.headers.authorization
          localStorage.setItem('authorization', auth)
          
          this.$router.push('agent');

          console.log(auth)
        } else {
          this.$router.push('/');
        }
        
      })
      
    }
  } 
};