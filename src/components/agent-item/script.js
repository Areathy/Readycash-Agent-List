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
        // setInterval(() => {        
            this.balanceState.data = res.data
            console.log(this.balanceState)
        // }, 4000)
      }).finally(() => {
        this.balanceState.loading = false;
      })
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