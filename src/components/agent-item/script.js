import api from '../../apis/readycash';

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
      api.get(`agent/downlines/${realId}/balance`, {
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

      setInterval(this.getBalance, 200000);
    },

  }
}