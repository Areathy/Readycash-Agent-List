import api from '../../apis/readycash';
import 'vuejs-noty/dist/vuejs-noty.css';

export default {
  name: 'AgentItem',

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
        data: []
      },
      refreshBalance: setInterval(this.getBalance, 300000)
    }
  },
  
  created() {
    this. getBalance();
  },

  updated(){
    this.redirectUser();
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
      })
      .finally(() => {
        this.balanceState.loading = false;
      })
      .catch( (error) => {
        if(error || !auth) {          
          clearInterval(this.refreshBalance);
        }
      }); 

     
    },

    redirectUser() {
      const auth = localStorage.getItem('authorization')
      setTimeout(() => {
        localStorage.clear();
      }, 18000000);
      if (!auth) {
        this.$router.push('/');
        this.$noty.error('Bearer token is not set', {
          timeout: 5000,
          layout: 'topCenter',
          theme: 'metroui',
        })
      }
    },
    

  }
}