import axios from 'axios';
import { URL_CHAT_API } from '@/libs/consts';

export class ChatApi {
  private chat: string;
  constructor(chat: string) {
    this.chat = chat;
  }

  public async getRepl(): Promise<any> {
    return axios.get(`${URL_CHAT_API}?word=${this.chat}`);
  }
}
