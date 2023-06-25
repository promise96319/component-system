# 组件库管理系统服务端

使用技术：

- 服务端框架：`Nestjs`
- 数据库：`MongoDB`
- `ORM`：`Prisma`
- 接口文档：`Swagger`

## 启动

- `Node` 环境：`v18+`
- 包管理工具：`pnpm`

```bash
# 安装依赖
pnpm i

# 启动
pnpm run dev
```

## 开发

### 目录

src 目录结构如下：

```js
.
├── main.ts // 入口文件
├── app.module.ts // 入口模块
├── common  // 公共文件
│   ├── constant // 常量
│   ├── decorator // 装饰器
│   ├── filter // 过滤器
│   ├── guard // 守卫
│   ├── interceptor // 拦截器
│   ├── logger // 日志
│   └── pipe // 管道
└── module  // 模块目录
    └── user // 用户模块
        ├── dto  // 数据传输对象
        ├── entities  // 数据库模型
        ├── user.controller.spec.ts
        ├── user.controller.ts // 控制器
        ├── user.module.ts // 模块
        ├── user.service.spec.ts
        └── user.service.ts // 服务
```

### 接口开发

通过 `nest` 命令生成接口文件模板，详情见 [nest-cli](https://docs.nestjs.com/cli/usages)。

```bash
nest generate resource <模块名>
```

### 接口更新

接口开发完成后，通过以下命令生成 `swagger` 的 `json` 文件：

```bash
pnpm run generate-api
```

将 `dist/api.json` 文件上传至公司内部 [API 管理平台](http://dev-api.qingteng.cn:81/#/project/648813638ac2e00019ea8c73/interface/list?versionId=648815b18ac2e00019ea8c7b)，即可完成接口文档的更新。

## 数据库

> 注意：请谨慎对数据库内容修改，以免影响正常使用。

### 数据库可视化

下载 `MongoDB Compass` 软件，连接公司内部服务器数据库地址即可，如 `mongodb://<用户名>:<密码>@<主机名>:<端口号>/<数据库>?directConnection=true&authSource=admin`。

### 数据库内容初始化

在 `prisma/seed.ts` 文件中编写初始化数据，然后执行以下命令：

```bash
npx prisma db seed
```

### 数据库模型更改

在 `prisma/schema.prisma` 文件中更改模型，然后执行以下命令：

```bash
npx prisma generate
```

执行完成后会生成相应的 `TS` 类型文件，在代码中可以直接使用。另外，需要将此处的类型文件同步给客户端。

定外完模型后，通过以下命令将模型同步到数据库中：

```bash
npx prisma db push
```

### 数据库部署

数据库部署文件在 `mongo` 目录下，使用 `docker-compose` 部署：

```bash
cd mongo
docker-compose -f docker-comopose.auth.yml up -d
```

### VSCode 插件

安装 `prisma` 插件，可以格式化 `prisma` 文件。在 `setting.json` 中添加以下配置（已在 `.vscode` 文件中添加），可以在文件保存时自动格式化：

```json
{
  "[prisma]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "Prisma.prisma"
  }
}
```

## 部署

使用 `docker` 将服务部署到服务器端口 `37020` 上。

```bash
docker-compose up -d
```

## 资料

- [nestjs](https://docs.nestjs.com/openapi/introduction)
- [prisma](https://www.prisma.io/docs/concepts/overview/why-prismas)
