<template lang="html">
  <div class="board">
    <div v-for="i in 3" :key="i" class="row" :class="{'row-center':i==2}">
      <square
        v-for="j in 3"
        :key="(i-1)*3 + j-1"
        :idx="(i-1)*3 + j-1"
        :class="{'col-center':j==2}"
      />
    </div>
  </div>

</template>

<script>
import Square from '@/components/Square.vue'
export default {
  name: 'board',
  components: {
      Square
  }
}
</script>

<style lang="css" scoped>
.board {
  width: 12rem;
  height: 12rem;
  margin: auto;
}
.row {
  width: 12rem;
  height: 4rem;
}
.row-center {
  border-top: 0.3rem solid black;
  border-bottom: 0.3rem solid black;
}
.col-center {
  border-left: 0.3rem solid black;
  border-right: 0.3rem solid black;
}
</style>
