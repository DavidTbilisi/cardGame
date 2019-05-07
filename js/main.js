let vm = new Vue({
    el: "#root",
    data: {
        title: 'Game',
        mast: ['t_','p_','b_','c_'],
        cards: [],
        cardCount: 6,
        fromGenCards: "c_02",
        points: {
            win:0,
            lost:0
        }
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
            this.cards =[];
            for (let i = 0; i < this.cardCount; i++) {
                let card = this.random({min:1, max:13});
                let mast = this.random({min:0, max:3});
                this.cards.push( this.mast[mast] + this.pad(card) );
            } 
            let oneOf = this.random({min:0, max:this.cardCount-1});
            console.log(oneOf);
            this.fromGenCards = this.cards[oneOf];

        },
        test: function (e) {
            if (e.target.dataset.match == this.fromGenCards) {
                e.target.style.border = "5px solid green";
                setTimeout (() => {
                    e.target.style.border = "none";
                    this.points.win++;
                    this.genCards();
                }, 500)
            } else {
                this.points.lost--;
            }
        }
    },
    mounted() {
        this.genCards();
    }
});