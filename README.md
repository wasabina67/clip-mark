# clip-mark
ClipMark 😎

Quickly copy any webpage as a markdown link to your clipboard with just one click.

## Install

WIP

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
Quickly copy any webpage as a markdown link to your clipboard with just one click.
```

- category: Tool
- language: English
- screenshot: `1280x800`, `JPEG`
- Homepage URL
  - https://github.com/wasabina67/clip-mark
- Support URL
  - https://github.com/wasabina67/clip-mark

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
この拡張機能は、ユーザーが右クリックした際に表示されるコンテキストメニューから、
「ClipMark」を選択した時に、現在開いているタブのURLとタイトルを取得するためにactiveTabの権限を使用しています。
これは、マークダウン形式のリンクを作成するために必要な情報です。
```

scripting

```
```

clipboardWrite

```
```

リモートコード を使用していますか？

- [x] いいえ、リモートコード を使用していません
