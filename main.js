const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'http://mio.se',
        }
    },

    methods: {
        changePic() {
            var blue = './assets/images/socks_blue.jpg'
            var green = './assets/images/socks_green.jpg'
            if (this.image === blue) {
                this.image = green
            } else {
                this.image = blue
            }
        }
    }
})