# v2Board Client

基于 [v2Board API](https://github.com/fxxsj/v2board-api) 和 [mihomo](https://github.com/MetaCubeX/mihomo) 内核的 Electron 桌面客户端，参考 [Tidalab-Unpack](https://github.com/Yuzuki616/Tidalab-Unpack) 架构设计。

## 功能特性

- 🔐 **v2Board 账户管理**：登录、注册、获取用户信息
- 📡 **订阅管理**：自动拉取订阅节点，支持多种协议
- 🔄 **mihomo 内核**：高性能代理内核，支持 TUN 模式
- 🎯 **智能路由**：国内直连，海外自动选择最优节点
- 📊 **流量统计**：实时显示上传/下载流量和用量百分比
- ⚡ **节点延迟管理**：基于 mihomo 的节点延迟测试、批量测速和状态缓存
- 🔧 **OSS 下发**：启动后从 OSS JSON 读取后端地址和版本信息，统一更新
- 🎨 **系统托盘**：最小化到托盘，快速开关代理
- 🌗 **暗色主题**：精美的深色界面

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Electron 33 |
| 前端 | React 18 + Vite 5 |
| 内核 | mihomo (MetaCubeX) |
| API | v2Board API v1 |
| 构建 | electron-builder |

## 快速开始

### 前置条件

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
# 安装 Electron 依赖
npm install

# 安装前端依赖
cd frontend && npm install && cd ..
```

### 开发模式

```bash
# 1. 启动前端开发服务器
cd frontend && npm run dev &

# 2. 启动 Electron
npm start
```

### OSS 配置

- 本地只需要配置 `app.config.json` 里的 `remote_config_url`
- 客户端启动后会先读取这个 OSS JSON
- JSON 里下发所有需要的后端信息：
  - `backend_api_url`
  - `version`
  - `download_url`
- 这样登录、注册、节点列表、订阅等所有 API 都会自动走 OSS 下发的后端地址

### OSS 缓存

- 客户端会把最近一次成功拉到的 OSS JSON 缓存在本地用户目录
- 如果 OSS 短暂不可用，客户端会优先使用这份缓存继续启动
- 退出软件时会自动删除缓存文件，确保不会长期保留旧配置

### 版本更新

- 版本号和下载地址也从同一个 OSS JSON 里读取
- 当返回的版本号高于本地 `app_version` 时，客户端顶部会显示更新提示并提供下载入口
- 如果你想做平台区分，可以在 JSON 里放 `windows_version` / `windows_download_url` 和 `macos_version` / `macos_download_url`

### 构建

```bash
# macOS (Apple Silicon / Intel)
npm run build

# Windows
npm run build
```

如果需要显式指定目标平台：

```bash
# macOS (Apple Silicon)
node scripts/build.js mac arm64

# macOS (Intel)
node scripts/build.js mac x64

# Windows
node scripts/build.js win
```

Windows 下也可以直接运行 `build.cmd`。

## 项目结构

```
v2board-client/
├── src/                      # Electron 主进程
│   ├── main.js               # 入口文件
│   ├── dist/                 # 前端构建产物
│   └── assets/               # 图标资源
├── frontend/                 # React 前端
│   ├── src/
│   │   ├── App.jsx           # 主组件
│   │   └── main.jsx          # React 入口
│   └── package.json
├── libs/                     # 运行时资源
│   ├── darwin-arm64/         # macOS ARM64 内核
│   ├── darwin-x64/           # macOS Intel 内核
│   ├── win32-x64/            # Windows 内核
│   ├── geo/                  # GeoIP/GeoSite 数据库
│   └── config/               # 配置文件
├── res/                      # 打包图标
├── package.json
├── build.sh                  # 构建脚本
├── build.cmd                 # Windows 构建脚本
└── README.md
```

## 平台支持

- macOS：支持 Apple Silicon 和 Intel
- Windows：支持 x64
- `npm run build` 会根据当前平台自动选择正确的打包目标和 mihomo 内核目录

## OSS JSON 示例

```json
{
  "backend_api_url": "http://43.139.138.166:33881",
  "version": "1.0.1",
  "download_url": "https://oss.example.com/v2board-client-1.0.1.exe",
  "windows_version": "1.0.1",
  "windows_download_url": "https://oss.example.com/v2board-client-1.0.1.exe",
  "macos_version": "1.0.1",
  "macos_download_url": "https://oss.example.com/v2board-client-1.0.1.dmg"
}
```

## API 端点

客户端最终还是调用 v2Board 的这些端点，只是 `backend_api_url` 由 OSS JSON 下发：

- `POST /api/v1/passport/auth/login` - 登录
- `POST /api/v1/passport/auth/register` - 注册
- `GET /api/v1/user/info` - 用户信息
- `GET /api/v1/client/subscribe?token=` - 订阅
- `GET /api/v1/user/plan/fetch` - 套餐列表
- `GET /api/v1/user/server/fetch` - 节点列表

## 许可证

MIT
