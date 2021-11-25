const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            images: ['./assets/images/socks_blue.jpg', './assets/images/socks_green.jpg'],
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1

        },
        changeColor(color) {
            if (color == this.variants[0].color) {
                this.image = this.variants[0].image
            } else {
                this.image = this.variants[1].image
            }
        },
        changeColorV2(image) {
            this.image = image
        }
    }
})