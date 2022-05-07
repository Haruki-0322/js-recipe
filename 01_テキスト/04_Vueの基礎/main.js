Vue.createApp({
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        countUp: function() {
            // thisは自分が定義したものが全部入ったオブジェクト
            this.count += 1
        }
    },
}).mount("#app")