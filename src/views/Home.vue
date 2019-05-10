<template>
  <div class="home" ref="home">
    <Chat
      :messages="messages"
      @emitClickChatSend="sendChat"
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Chat from '@/components/Chat.vue';
import { ChatApi } from '@/libs/api/ChatApi';

@Component({
  components: { Chat },
})
export default class Home extends Vue {
  private messages: string[] = [];

  protected async sendChat(chat: string): Promise<any> {
    this.messages.push(chat);
    const chatApi = new ChatApi(chat);
    const { data } = await chatApi.getRepl();
    this.messages.push(data._word);
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: url(../assets/logo.png)
}
</style>
