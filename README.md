# タビメモ (PWA)

## GitHub Pagesへの置き方
1. このフォルダの中身5ファイルをリポジトリのルートにアップロード
   (index.html / manifest.json / sw.js / icon-192.png / icon-512.png)
2. Settings → Pages で公開(既に設定済みならアップロードだけでOK)
3. スマホでURLを開き「ホーム画面に追加」→ アプリアイコンで起動できます

## アプリを更新したとき
- index.html を差し替えたら、sw.js の 'tabimemo-v1' を 'tabimemo-v2' のように
  1つ数字を上げると、全員の端末に確実に反映されます
