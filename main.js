const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(idinc) {
            //First we have to check if the item is in the cart and
            //IF it is we update the quantity, else add it
            var item;
            if (this.cart.length > 0) {
                let found = this.cart.find(x => x.id === idinc);
                console.log("found item: " + found)
                if (found !== undefined) {
                    this.cart[this.cart.indexOf(found)].amount++;
                    console.log("Found in cart")


                } else {
                    console.log("Not found in cart")
                    item = { id: idinc, amount: 1 }
                    this.cart.push(item)
                }
            } else {
                console.log("Empty array, adding first")
                item = { id: idinc, amount: 1 }
                this.cart.push(item)
                console.log("First object added:" + this.cart[0])
            }

        },
        removeItem(index) {
            if (this.cart[index].amount > 1) {
                this.cart[index].amount--;
            } else {
                this.cart.splice(index, 1);
            }

            //this.cart.splice(index, 1);
        }

    }
})