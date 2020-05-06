export default {
   name: "Ismail",
   data: function () {
      return {
         name: "Ismaila Ahmed",
         id: "104563",
         phone: "07089923404",
         cashPool: "N26,000,000.00",
         balance: "N605,000.00"
      }
   },

   mounted() {
      this.changeCashPool(),
         this.changeBalance()
   },

   methods: {
      changeCashPool() {

         setInterval(() => {
            const newCashpool = Math.floor(Math.random() * 100);
            this.cashPool = "N" + newCashpool + ",000,000.00";
         }, 4000)
      },

      changeBalance() {

         setInterval(() => {
            const newBalance = Math.floor(Math.random() * 1000);
            this.balance = "N" + newBalance + ",000.00";
         }, 3000)
      }
   }


};



