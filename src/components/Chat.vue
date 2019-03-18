<template>
  <div class="chat">
    <p
      v-for="(message, index) in messages"
      v-bind:key="index">
        {{ message }}
    </p>
    <section>
      <div>
        <input
          type="text"
          v-model="chat"
          placeholder="input message here."/>
        <button
          :disabled="chat.length <= 0"
          @click="handleClickChatSend(chat)">
          決定
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Chat extends Vue {
  // 「!はNon-null assertion operator。つまり、NotNullな値ってことの宣言
  @Prop({ default: () => []})
  public messages!: string[];
  protected chat: string = '';

  /**
   * チャット送信文字決定
   */
  protected handleClickChatSend(chat: string): void {
    if (!chat) {
      return;
    }
    this.$emit('emitClickChatSend', chat);
    this.chat = '';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
