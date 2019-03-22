<template>
  <div class="chat">
    <section class="chat-section">
      <div
        class="__message-area"
        v-for="(message, index) in messages"
        v-bind:key="index">
          <span class="__message">{{ message }}</span>
      </div>
    </section>
    <section class="send-section">
      <div class="__interact-area">
        <textarea
          class="__chat-input"
          v-model="chat"
          placeholder="input message here."/>
        <button
          class="__chat-send-btn"
          :class="{'--state-inactive': chat.length <= 0, '--state-active': 0 < chat.length}"
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
.chat {
  height: 100vh;
  .chat-section {
    height: 90%;
    overflow-y: scroll;
    .__message-area {
      &:nth-child(odd) {
        text-align: right;
        margin: 5px;
        padding: 5px;
        .__message {
          position: relative;
          display: inline-block;
          border: solid 1px white;
          border-radius: 30px;
          color: #555;
          font-size: 16px;
          background: #fffbf4;
          padding: 10px;
          text-align: left;
        }
      }
      &:nth-child(even) {
        text-align: left;
        margin: 5px;
        padding: 5px;
        .__message {
          position: relative;
          display: inline-block;
          border: solid 1px white;
          border-radius: 30px;
          color: #555;
          font-size: 16px;
          background: #e0edff;
          padding: 10px;
          text-align: left;
        }
      }
    }
  }
  .send-section {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
    .__interact-area {
      display: flex;
      .__chat-input {
        width: 80%;
      }
      .__chat-send-btn {
        width: 20%;
      }
    }
  }
}
</style>
