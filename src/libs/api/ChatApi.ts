import axios from 'axios';
import { Consts } from '@/libs/Consts';

/**
 * チャット系API管理クラス
 */
export class ChatApi {
  private chat: string;
  constructor(chat: string) {
    this.chat = chat;
  }

  public async getRepl(): Promise<any> {
    return axios.get(`${Consts.URL_CHAT_API}/${this.chat}`);
  }
}
