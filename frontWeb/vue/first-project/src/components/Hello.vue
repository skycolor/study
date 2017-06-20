<template>
  <div class="main">
      <input type="text" v-model="inputVal" @keyup.enter="inputConfirm"  >
      <ul>
          <li v-for="item in items" v-text="item.des" @click="handleSelected(item)"
              :class="{ isUnderline: item.isSelected }"></li>
      </ul>
  </div>
</template>

<script>
import store from "./store";


export default {
  name: 'main',
  data () {
    return {
        items : store.getObj() ,
        inputVal : ""
    }
  } ,
  watch : {
    items :{
        handler(val , oldVal){
           store.saveObj(val);
        } ,
        deep : true
    }
  } ,
  methods : {
    handleSelected(item) {
       item.isSelected = !item.isSelected;
    },
    inputConfirm() {
       this.items.push({des : this.inputVal , isSelected : false});
       this.inputVal = "";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{margin-top: 15px;}

input{width: 10%;}

ul {
  padding: 0;
  width: 30%;
  margin: 30px auto;
}

li {
  margin: 0 10px;
}
li.isUnderline {
  text-decoration: underline;
}

</style>
