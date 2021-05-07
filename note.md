# 开发笔记-常见问题：
编辑器：vscode；
## 问题1：
### 现象
> `vite.config.ts` 中 __dirname 提示未定义；
> 此时在文件中通过通配符 `@` 引用文件，提示无法找到相对路径；
```
 resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src'),
    },
  },

```
### 解决方案：
`process ` 和 `__dirname` 都是node.js的全局定义变量；重新安装node包即可；

        npm i @types/node

## 问题2：
```
Unexpected use of file extension "vue" for "@/components/Breadcrumb/index.vue"eslintimport/extensions
```

## 问题3：
### 现象：
>在 app.vue文件执行 store.dispatch 进行异步路由注入（动态添加路由），F5刷新页面后无法匹配到对应路由，
### 原因
```
现在所有的路由都是异步，需要等待路由 ready以后再挂载程序；在注册路由之前进行异步路由处理；
```
### 解决方案：
```
main.ts
// 在挂载路由之前，先进行异步路由处理
store.dispatch('permissionModule/getPermissonRoutes');
```
## 问题4：
### 现象：
> Cannot find module '@/store/index' or its corresponding type declarations.Vetur(2307)
### 原因：
```
//app.vue
 vetur 读取tsconfig.json 配置文件，需要在tsconfig.json中配置path别名
```
### 解决方案：
```
tsconfig.json

"paths": {
      "@/*": ["src/*"]
    }

```

## 问题5：eslint-plugin-vue 与 Prettier冲突
### 现象：
> Prettier和eslint设置的规则冲突
### 解决方案：举例
```
module.exports = {
  // ...
  extends: [
    // ...
    // 'eslint:recommended',
    // ...
    'plugin:vue/vue3-recommended',
    // ...
    "prettier"
    // Make sure "prettier" is the last element in this list.
  ],
  // ...
}
```