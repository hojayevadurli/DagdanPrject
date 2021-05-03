Vue.createApp({
    data() {
      return {
        items: [            
        ],
        subtotal:0,
        tax: 0.05,
        total:0

      }
    },
    methods:{
        add(){
            this.items.push( { price: 0, quantity: 0 });
        },
        calculate(){

            var cost=0;
            for(let item of this.items)
            {
                cost+=item.price*item.quantity;

            }
            this.subtotal=cost;
            var Total=0;
            this.total=(this.tax*cost)+cost;


           


        }
    }
  }).mount('#array-rendering')