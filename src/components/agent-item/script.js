import axios from "axios";

export default {
  name: "AgentItem",

  props: {
    agent: {
      type: Object,
      default: () => null,
      required: true,
    }
  },

  data: function () {
    return {
      balanceState: {
        loading: false,
        data: null
      },
    }
  },
  
  created() {
    this. getBalance();
  },

  computed: {
    balance() {
      return this.balanceState.data;
    },
    loading() {
      return this.balanceState.loading;
    }
  },

  methods: {
    getBalance() {
      const auth = localStorage.getItem('authorization')
      this.balanceState.loading = true;
      const {realId} = this.agent;
          axios.get(`http://62.173.32.30:8080/rc/rest/agent/downlines/${realId}/balance`, {
        headers: {
          'Authorization': auth
        }
      })
      .then(res => {
                
            this.balanceState.data = res.data
            console.log(this.balanceState)
        
      })
      .finally(() => {
        this.balanceState.loading = false;
      })

      // setInterval(this.getBalance, 30000);
    },

  }

  // computed: {
  //   agentSearch: function() {
  //     return this.agents.filter((agent) =>{
  //       return agent.fullName.match(this.search)
  //     })
  //   }
  // }

}