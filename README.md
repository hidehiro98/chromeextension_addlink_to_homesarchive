# Add a shortcut to the Home's Archive in the Yahoo Realestate
- Lifull Home's Archiveサイトの賃貸掲載履歴を部屋ごとにソートする拡張機能です。
- サイト例：https://www.homes.co.jp/archive/b-13683211/

## 使い方 (Chrome extensionとして)
- https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=ja をインストールして、右上の拡張機能をクリックしてCが黄色くなっていることを確認
- $ git clone https://github.com/hidehiro98/chromeextension_yahoo_to_homes
- chrome://extensions/ にアクセス
- 右上のディベロッパーモードをオンにする
- 左上の「パッケージ化されていない拡張機能を読み込む」をクリック
- このリポジトリのsrcディレクトリを選択する

## （WIP）使い方 (Tampermonkey scriptとして)
- https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja をインストール
- Tampermonkeyをクリックして`新規スクリプトを追加`クリック
- 2行目を`// @name         Add a shortcut to the Home's Archive in the Yahoo Realestate `に置き換え
- 7行目を`// @match        https://realestate.yahoo.co.jp/rent/*`に置き換え
- `src/content.js`の内容を全て`// Your code here...`にコピペ
