export default {
   name: "Alonge",
   data: function () {
      return {
         name: "Alonge Michael",
         id: "120003",
         phone: "08084220067",
         cashPool: "N4,000,000.00",
         balance: "N120,000.00"
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
         }, 5000)
      },

      changeBalance() {

         setInterval(() => {
            const newBalance = Math.floor(Math.random() * 1000);
            this.balance = "N" + newBalance + ",000.00";
         }, 7000)
      }
   }


};



