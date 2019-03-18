<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png">
    <Chat @emitClickChatSend="sendChat" />
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
  protected sendChat(chat: string): void {
    alert(chat);
  }
}
</script>
