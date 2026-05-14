# domtest

Deno環境でのテスト用に、ブラウザのドキュメントオブジェクトモデル（DOM）をシミュレートする最小限のDOM実装です。

このライブラリはグローバルな`document`オブジェクトを提供し、ブラウザなしでDOM操作コードを書くことができます。

## 機能

- ブラウザの動作を模倣したグローバルな`document`オブジェクトを提供
- `document.createElement()`で要素を作成
- `node.appendChild()`で子ノードを追加
- `node.textContent`プロパティでテキストコンテンツを設定
- プロパティセッター（例: `node.href`）で属性を設定
- `node.toString()`で要素をHTML文字列にシリアライズ

## 要件

- Deno 1.x

## 使い方

`domtest.js`をインポートして、グローバルな`document`オブジェクトを設定します。その後は、ブラウザと同じように使用できます。

```javascript
import './domtest.js';

const link = document.createElement('a');
link.textContent = 'JIG';
link.href = 'https://jig.jp/';

console.log(link.toString());
// 出力: <a href='https://jig.jp/'>JIG</a>

const div = document.createElement('div');
div.appendChild(link);

console.log(div.toString());
// 出力: <div><a href='https://jig.jp/'>JIG</a></div>
```

## テスト

付属のテストを実行するには、ターミナルで次のコマンドを実行してください:

```sh
deno test domtest.test.js
```

## ライセンス

MIT License — [LICENSE](LICENSE)を参照してください。
