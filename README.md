# clip-mark

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ljfcfnfiaecponbjcbgemoggojcilcch?logo=google-chrome&logoColor=white&label=Chrome%20Web%20Store&labelColor=4285F4&color=4285F4)](https://chromewebstore.google.com/detail/clipmark/ljfcfnfiaecponbjcbgemoggojcilcch)

ClipMark 😎

Quickly copy any webpage as a markdown link to your clipboard with just one click.

## Install

### chrome web store

https://chromewebstore.google.com/detail/clipmark/ljfcfnfiaecponbjcbgemoggojcilcch

### Developer mode

https://github.com/wasabina67/clip-mark/raw/refs/heads/main/zip/1.0/clipmark.zip

## How to use

1. Open any webpage in Google Chrome
2. Right-click on the page and select "ClipMark"
3. The link in markdown format will be copied to your clipboard
4. You can paste it anywhere you like

## Developer Dashboard

### Creating a ZIP file

```bash
rm -rf clipmark.zip && zip -r clipmark.zip * -x "screenshots/*" -x "zip/*"
```

### Build / listing

- description

```
1. Open any webpage in Google Chrome
2. Right-click on the page and select "ClipMark"
3. The link in markdown format will be copied to your clipboard
4. You can paste it anywhere you like
```

- category: Tool
- language: English
- screenshot: `1280x800`, `JPEG`
- Homepage URL

```
https://github.com/wasabina67/clip-mark
```

- Support URL

```
https://github.com/wasabina67/clip-mark
```

### Build / privacy

#### 単一用途

```
ClipMarkは、現在表示しているウェブページをマークダウン形式のリンクとして、
ワンクリックでクリップボードにコピーすることを単一の目的とした拡張機能です。
これにより、ユーザーはマークダウンを使用するドキュメントに簡単にリンクを追加できます。
```

#### 権限が必要な理由

contextMenus

```
この拡張機能は、ウェブページ上で右クリックした際に表示されるコンテキストメニューに、
「ClipMark」という項目を追加するために、contextMenusの権限を使用しています。
これにより、ユーザーは簡単に拡張機能にアクセスできます。
```

activeTab

```
この拡張機能は、「ClipMark」を選択した際に、現在開いているタブのURLとタイトルを取得するためにactiveTabの権限を使用しています。
これは、マークダウン形式のリンクを作成するために必要な情報です。
```

scripting

```
この拡張機能は、「ClipMark」を選択した際に、現在開いているタブ内でスクリプトを実行し、クリップボードへの書き込みや通知表示を行うためにscriptingの権限を使用しています。
これにより、マークダウン形式のリンクをクリップボードへ書き込み、通知を表示することができます。
```

clipboardWrite

```
この拡張機能は、作成したマークダウン形式のリンクを、ユーザーのクリップボードに書き込むためにclipboardWriteの権限を使用しています。
これにより、ユーザーは簡単にマークダウン形式のリンクを、任意の場所に貼り付けることができます。
```

リモートコード を使用していますか？

- [x] いいえ、リモートコード を使用していません
