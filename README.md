# LINE_AIChatbot_byGoogleAppsScript
LINE Messaging API とリクルートA3RTのメッセージ応答サービスTalk APIを組み合わせたAIチャットボットです。
コードはGoogle Apps Script(GAS)を使って開発しています。

# Files

1. LINEMessagingAPI.gs
LINE MessagingAPIのWebhook用doPost関数のプログラムです。
※LINE Developerページで発行したトークンをに埋め込む必要があります。
2. TalkAPI.gs
リクルートのTalk APIへのリクエストを行う関数のプログラムです
※Talk APIで発行したAPIキーを埋め込む必要があります。
3. appsscript.json
Google Apps Scriptの実行権限をまとめたマニュフェストファイルです。
※特に書き換える項目はありません。

# Installation

前提条件として、Line Messaging APIとTalk APIを利用できるよう環境構築が必要です。
[Line Messaging APIの登録手順](https://auto-worker.com/blog/?p=5117)

1. Google Apps Scriptで新しいプロジェクトを作成します。
2. 作成したGASプロジェクトにこのコードを張り付けて下さい。
3. TalkAPI.gsにあるAPIキーを定義部分を自身のAPIキーに書き換えてください。
4. LINEMessagingAPI.gsにあるアクセストークンをLINE Messaging APIの管理画面から取得したものに書き換えて下さい。
5. 新しいデプロイで「ウェブアプリ」として、実行ユーザー「自分」、アクセスできるユーザー「全員」を選択し、デプロイをクリックします。
6. デプロイ後に表示されるウェブアプリのURLをコピーし、LINE Messaging APIの管理画面でWebhookURLに指定します。
 
# Usage
 
LINE Messaging APIを利用したLINEアカウントにメッセージが投稿されると、WebhookのURLがリクエストされて稼働します。
 
# Author
 
* Tyamamoto1007
* https://auto-worker.com/blog
* https://qiita.com/Tyamamoto1007
 
# License(ライセンス)
 
GoogleAppsScript_cloudText-to-Speech_template is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

このコードはMITライセンスに則り、自由に改変して利用できます。
