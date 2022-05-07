<template>
  <div class="upper">
    <h1>入力画面</h1>
    <input type="number" v-model="money" />
    <div>入力額：{{ money }}円</div>
    <button v-on:click="moneyIn">入金</button>
    <button v-on:click="moneyOut" v-bind:disabled="notOut">出金</button>
  </div>
  <div class="middle">
    <h1>口座残高</h1>
    <div>残高：{{ outstanding }}円</div>
  </div>
  <div v-for="item in items" :key="item.id" class="bottom">
    <div>日付:{{ item.date }}</div>
    <div>操作:{{ item.process }}</div>
    <div>金額:{{ item.kingaku }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 0,
      outstanding: 0,
      items: [],
    };
  },
  methods: {
    moneyIn() {
      this.outstanding += Number(this.money);
      this.items.push({
        date: new Date(),
        process: "入金",
        kingaku: Number(this.money),
      });
    },
    moneyOut() {
      this.outstanding -= Number(this.money);
      this.items.push({
        date: new Date(),
        process: "出金",
        kingaku: Number(this.money),
      });
    },
  },
  computed: {
    notOut() {
      if (this.outstanding < Number(this.money)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
