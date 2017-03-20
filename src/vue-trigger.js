new Vue({
  el: '#app',
  data: {
    itemSet1: "",
    itemSet2: ""
  },
  computed: {
    allItems: function() {
      return this.itemSet1 + this.itemSet2;
      
    }
  }
  // data: {
  //   checkedNames: []
  // }
});