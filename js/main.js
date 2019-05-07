let vm = new Vue({
    el: "#root",
    data: {
        title: 'Game',
        mast: ['t_','p_','b_','c_'],
        cards: [],
        cardCount: 4,
        fromGenCards: "c_02",
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
            for (let i = 0; i < this.cardCount; i++) {
                let card = this.random({min:1, max:13});
                let mast = this.random({min:0, max:3});
                this.cards.push( this.mast[mast] + this.pad(card) );
            } 
            let oneOf = this.random({min:0, max:this.cardCount});
            this.fromGenCards = this.cards[oneOf];
        },
        
    },
    mounted() {
        this.genCards();
    }
});