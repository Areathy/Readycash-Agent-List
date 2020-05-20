import api from '../../apis/readycash';
import AgentItem from "../agent-item/index.vue";

export default {
  name: "Agent",

  components: {AgentItem},

  data: function () {
    return {
      agents: [],
      balance: null,
      errors: null,
      search:"",
      isSearch: false
    }
  },
  
  mounted() {
    this.fetchUsers();
    this.redirectUser();
    this.reLogin();
  },

  computed: {
      filteredAgents() {
        return this.agents.filter( agent => {
          return agent.fullName.toLowerCase().includes(this.search.toLowerCase()) || 
                agent.phoneNumber.toLowerCase().includes(this.search.toLowerCase()) ||
                agent.realId.toLowerCase().includes(this.search.toLowerCase())
       }) 
      }
  },

  methods: {
    fetchUsers() {
      const auth = localStorage.getItem('authorization')
      api.get('/agent/downlines', {
        headers: {
          'Authorization': auth
        }
      })
        .then(res => {
          this.agents = res.data
          console.log(this.agents)
        })
        
        .catch( (error) => {
          if(error) {
            console.log(error.response.data);
            this.errors = this.$noty.error(error.response.data, {
              timeout: 5000,
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
  }

  // computed: {
  //   agentSearch: function() {
  //     return this.agents.filter((agent) =>{
  //       return agent.fullName.match(this.search)
  //     })
  //   }
  // }

}