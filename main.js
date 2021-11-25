const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 11,
        }
    },
    methods: {
        buy() {
            if (this.inventory > 0) {
                this.inventory--;
            } else {
                alert('Out of stock!')
            }

        }
    }

})