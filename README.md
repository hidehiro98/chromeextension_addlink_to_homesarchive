# Add a shortcut to the Home's Archive
- Yahoo!不動産、Lifull Home's（ホームズ）、Suumo（スーモ）、Athome（アットホーム）の物件ページから、Lifull Home's Archiveサイトのその物件へのリンクを挿入する拡張機能です。
- サイト例
  - https://realestate.yahoo.co.jp/rent/detail/0000014701629aa3e49066d778b3b9873c3ba09cbeeb/
  - https://www.homes.co.jp/chintai/b-1030810001473/
  - https://suumo.jp/chintai/jnc_000055379799/
  - https://www.athome.co.jp/chintai/1067957447/

## 使い方 (Chrome extensionとして)
- $ git clone https://github.com/hidehiro98/chromeextension_yahoo_to_homes
- chrome://extensions/ にアクセス
- 右上のディベロッパーモードをオンにする
- 左上の「パッケージ化されていない拡張機能を読み込む」をクリック
- このリポジトリのsrcディレクトリを選択する

## （WIP）使い方 (Tampermonkey scriptとして)
- https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja をインストール
- Tampermonkeyをクリックして`新規スクリプトを追加`クリック
- 2行目を`// @name         Add a shortcut to the Home's Archive`に置き換え
- 7行目を`// @match        https://realestate.yahoo.co.jp/rent/*`に置き換え
- `src/content.js`の内容を全て`// Your code here...`にコピペ

## 不動産関連拡張機能リスト
- [Lifull Home's Archive Sort](https://github.com/hidehiro98/chromeextension_lifull_homes_archive)
- [Add a shortcut to the Home's Archive](https://github.com/hidehiro98/chromeextension_addlink_to_homesarchive)
