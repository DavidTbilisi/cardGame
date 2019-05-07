let vm = new Vue({
    el: "#root",
    data: {
        title: 'Game',
        mast: ['t_','p_','b_','c_'],
        cards: []
    },
    methods: {
        random: function (randome){
           return Math.floor(Math.random()*(randome.max-randome.min+1)+randome.min)
        },
         pad: function(num) {
            var s = num+"";
            while (s.length < 2) s = "0" + s;
            return s;
        },
        genCards: function() {
            
        }
    },
    mounted() {
        let rand = this.random({min:1, max:13});
        console.log(this.pad(rand))
    }
});