/**
 * 定数管理クラス
 */
export class Consts {
  public static readonly BASE_URL = process.env.VUE_APP_API_BASE_URL;
  public static readonly URL_CHAT_API = `${Consts.BASE_URL}/repl/word`;
}
