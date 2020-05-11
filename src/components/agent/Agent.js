import axios from "axios";

export default {
  name: "Agent",

  data: function () {
    return {
      agents: null,
      balance: null,
      errors: null
      // search:""
    }
  },
  
  mounted() {
    this.fetchUsers(),
    this. getBalance(),
    this.reLogin()
  },

  methods: {
    fetchUsers() {
      const auth = localStorage.getItem('authorization')

      axios.get('http://62.173.32.30:8080/rc/rest/agent/downlines', {
          headers: {
          'Authorization': auth
          }
        })
        .then(res => {
          this.agents = res.data
          console.log(this.agents)
        })
        .catch(e=>{
          if(e) {
            this.errors = "Please set Bearer-token" 
            alert(this.errors)
          }
        })
        
    }, 
    
    getBalance() {
      const auth = localStorage.getItem('authorization')
      axios.get('http://62.173.32.30:8080/rc/rest/agent/downlines/0000100012/balance', {
        headers: {
          'Authorization': auth
        }
      })
      .then(res => {

        // setInterval(() => {        
            this.balance = res.data
            console.log(this.balance)
        // }, 4000)
      })
    },
    
    reLogin() {
      setTimeout(() => {
        localStorage.clear();
      }, 90000);
   }

  }

  // computed: {
  //   agentSearch: function() {
  //     return this.agents.filter((agent) =>{
  //       return agent.fullName.match(this.search)
  //     })
  //   }
  // }

}