# rh-template-umi

基于 Umi 的中后台工程脚手架，在线预览：https://rh-umi.vercel.app

![](./demo.png)

## 技术栈

- Umi 4.x ([Umi Max 简介](https://next.umijs.org/zh-CN/docs/max/introduce))
- React18 + TypeScript + RxJS

## 功能特点

- 自定义 Sidebar 菜单
- 内置常用组件
- Antd 样式覆写
  <!-- - Swagger Doc Api TypeScript 接口代码生成 -->
  <!-- - 主题换色 -->

yarn workspaces

```yml
packages/rh-components # 组件库，导入别名： @roothub/components
packages/rh-shared # 函数共享库，导入别名： @roothub/shared
```

## TODO

- [x] yarn workspaces
- [ ] 配置化表格开发封装(WIP)
- [ ] 动态表单
- [ ] 高效中后台前端开发方案

## 使用说明

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn dev
```

## License

MIT author[@giscafer](https://giscafer.com)
