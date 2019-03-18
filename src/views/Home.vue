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

@Component({
  components: {
    HelloWorld,
    Chat,
  },
})
export default class Home extends Vue {
  protected messages: string[] = [];

  protected sendChat(chat: string): void {
    // TODO API call here!
    this.messages.push(chat);
  }
}
</script>
