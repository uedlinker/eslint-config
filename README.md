# ESLint Configs for Uedlinker

此 ESLint 规范包含三个 NPM 包：

- [@uedlinker/eslint-config-base](https://www.npmjs.com/package/@uedlinker/eslint-config-base)：适用于 Node.js 应用开发。
- [@uedlinker/eslint-config-react](https://www.npmjs.com/package/@uedlinker/eslint-config-base)：适用于 React 项目开发，基于 `@uedlinker/eslint-config-base`。
- [@uedlinker/eslint-config-flow](https://www.npmjs.com/package/@uedlinker/eslint-config-base)：适用于运用了 Flowtype 语法的项目，基于 `@uedlinker/eslint-config-base`，也可以结合 `@uedlinker/eslint-config-react` 一起使用。

## 使用 @uedlinker/eslint-config-base

安装依赖：

```shell
npm i -D @uedlinker/eslint-config-base eslint eslint-plugin-import eslint-plugin-node
```

配置 .eslintrc.js：

```js
module.exports = {
  extends: ['@uedlinker/eslint-config-base']
}
```

## 使用 @uedlinker/eslint-config-react

安装依赖：

```shell
npm i -D @uedlinker/eslint-config-base @uedlinker/eslint-config-react eslint eslint-plugin-import eslint-plugin-node babel-eslint eslint-plugin-react
```

配置 .eslintrc.js：

```js
module.exports = {
  extends: [
    '@uedlinker/eslint-config-base',
    '@uedlinker/eslint-config-react'
  ]
}
```

## 使用 @uedlinker/eslint-config-flow

安装依赖：

```shell
npm i -D @uedlinker/eslint-config-base @uedlinker/eslint-config-flow eslint eslint-plugin-import eslint-plugin-node babel-eslint eslint-plugin-flowtype
```

配置 .eslintrc.js：

```js
module.exports = {
  extends: [
    '@uedlinker/eslint-config-base',
    '@uedlinker/eslint-config-flow'
  ]
}
```

结合 @uedlinker/eslint-config-react 一起使用，还需要安装一下依赖：

```shell
npm i -D @uedlinker/eslint-config-react eslint-plugin-react
```

再添加配置项：

```js
 module.exports = {
   extends: [
     '@uedlinker/eslint-config-base',
+    '@uedlinker/eslint-config-react',
     '@uedlinker/eslint-config-flow'
   ]
 }
```

## 问题

如果疑问，请提 Issue。
