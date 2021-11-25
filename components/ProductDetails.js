// solution
app.component('product-details', {
        props: {
            details: {
                type: Array,
                required: true
            },
            asd: {
                type: Number,
                required: true
            }
        },
        template:
        /*html*/
            `
            
  <ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>
  <p>{{asd}}</p>
  `
    })
    // solution