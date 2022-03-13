//引数に指定されたテキストをTalk APIにリクエストし、応答メッセージを返却する関数
function requestTalkApi(text) {
  //A3RTのTalkAPIのAPIキーを定義する(TalkAPIのページからAPIキーを発行)
  let apiKey = "********************************";
  //Talk APIのリクエストURLを設定する
  let apiURL = "https://api.a3rt.recruit.co.jp/talk/v1/smalltalk";
  //APIのリクエストでPOSTデータするパラメーターを設定する
  let payload = {
    'apikey': apiKey,
    'query': text
  };
  //HTTP POSTで前述で設定したパラメーターをオプションで設定する
  let options = {
    'method': 'post',
    'payload': payload
  };
  //APIにリクエストし、返却されたデータをテキスト化して変数に格納する
  let res = UrlFetchApp.fetch(apiURL,options).getContentText();
  //JSONデータをparseメソッドでオブジェクトに変換する
  let json = JSON.parse(res);
  //TalkAPIから出力された結果を戻り値に指定
  return json.results[0].reply;
}
