import axios from "axios";
import AgentItem from "../agent-item/index.vue";

export default {
  name: "Agent",

  components: {AgentItem},

  data: function () {
    return {
      agents: null,
      balance: null,
      errors: null
      // search:""
    }
  },
  
  mounted() {
    this.fetchUsers()
    this.redirectUser()
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
          // this.errors = 'Incorrect password entered, Please check your password and try again' 
          // alert(this.errors)
          this.errors = this.$noty.warning('Please set Bearer-token', {
            timeout: 4000,
            layout: 'topCenter',
            theme: "metroui",
          })

        }
      })        
    }, 

    redirectUser() {
      const auth = localStorage.getItem('authorization')
      if (!auth) {
        this.$router.push('/');
      }
    },
    
    reLogin() {
      setTimeout(() => {
        localStorage.clear();
      }, 5400000);
   }
    // getBalance(id) {
    //   const auth = localStorage.getItem('authorization')
    //   axios.get(`http://62.173.32.30:8080/rc/rest/agent/downlines/${id}/balance`, {
    //     headers: {
    //       'Authorization': auth
    //     }
    //   })
    //   .then(res => {

    //     // setInterval(() => {        
    //         this.balance = res.data
    //         console.log(this.balance)
    //     // }, 4000)
    //   })
    // },
  }

  // computed: {
  //   agentSearch: function() {
  //     return this.agents.filter((agent) =>{
  //       return agent.fullName.match(this.search)
  //     })
  //   }
  // }

}