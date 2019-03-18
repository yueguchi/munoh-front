<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png">
    <Chat
      :messages="messages"
      @emitClickChatSend="sendChat"
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Chat from '@/components/Chat.vue';
import { ChatApi } from '@/libs/api';

@Component({
  components: {
    HelloWorld,
    Chat,
  },
})
export default class Home extends Vue {
  protected messages: string[] = [];

  protected async sendChat(chat: string): Promise<any> {
    this.messages.push(chat);
    const chatApi = new ChatApi(chat);
    const { data } = await chatApi.getRepl();
    this.messages.push(data.message);
  }
}
</script>
