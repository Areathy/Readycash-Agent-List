export default {
   name: "Henry",
   data: function () {
      return {
         name: "Henry Chukwuemeka Isaac",
         id: "100007",
         phone: "08088222567",
         cashPool: "N50,000,000.00",
         balance: "N345,000.00"
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
         }, 6000)
      }
   }


};