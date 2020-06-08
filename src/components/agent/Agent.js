import api from '../../apis/readycash';
import AgentItem from "../agent-balance/index.vue";

export default {
  name: "Agent",

  components: {AgentItem},

  data: function () {
    return {
      agents: [],
      balance: null,
      errors: null,
      search:""
    }
  },
  
  mounted() {
    this.fetchUsers();   
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
        })
        
        .catch( (error) => {
          if(error) {
            localStorage.clear();
            this.$router.push('/');
          }
      })    
    }, 

    
  }

}