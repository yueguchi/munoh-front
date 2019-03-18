<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <p>{{ msg2 }}</p>
    <p @click="handleClickMessage(msg3)">{{ msg3 }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({type: String})
  private msg!: string;
  @Prop({type: String})
  private msg2!: string;
  /** アノテーションがいないフィールドはdataになる */
  private msg3: string = 'Hello';
  /** メソッド */
  protected handleClickMessage(message: string): void {
    alert(message);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
