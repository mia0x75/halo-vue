## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run all tests
yarn test
```

## 问题解决

**1. build 构建中报 sass error**

解决方案：

```js
yarn rebuild node-sass // 对应报错的包，rebuild 即可
```
