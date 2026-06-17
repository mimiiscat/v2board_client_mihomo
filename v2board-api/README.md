# v2Board API 文档整理

> 说明：下表中的 URL **省略公共前缀** `/api/v1`（实际请求时请补上）。

## 在线浏览

- 仓库已包含 `index.html`（Docsify），可用于 GitHub Pages 直接浏览。
- 启用方式：GitHub 仓库 Settings → Pages → Deploy from a branch → `main` / `/(root)`。
- 本文档索引中所有链接均省略公共前缀 `/api/v1`，实际请求请自行补全。

### passport

| URL | 请求 | 描述 |
| --- | --- | --- |
| /passport/auth/forget | POST | [忘记密码/重置邮件](passport.md#passport-1) |
| /passport/auth/getQuickLoginUrl | POST | [登录](passport.md#passport-2) |
| /passport/auth/login | POST | [登录](passport.md#passport-3) |
| /passport/auth/loginWithMailLink | POST | [登录](passport.md#passport-4) |
| /passport/auth/register | POST | [注册](passport.md#passport-5) |
| /passport/auth/token2Login | GET | [登录](passport.md#passport-6) |
| /passport/comm/pv | POST | [passport 模块接口](passport.md#passport-7) |
| /passport/comm/sendEmailVerify | POST | [passport 模块接口](passport.md#passport-8) |

### user

| URL | 请求 | 描述 |
| --- | --- | --- |
| /user/changePassword | POST | [user 模块接口](user.md#user-1) |
| /user/checkLogin | GET | [登录](user.md#user-2) |
| /user/comm/config | GET | [获取配置](user.md#user-3) |
| /user/comm/getStripePublicKey | POST | [获取数据](user.md#user-4) |
| /user/coupon/check | POST | [检查/校验](user.md#user-5) |
| /user/getActiveSession | GET | [获取数据](user.md#user-6) |
| /user/getQuickLoginUrl | POST | [登录](user.md#user-7) |
| /user/getStat | GET | [获取数据](user.md#user-8) |
| /user/getSubscribe | GET | [获取数据](user.md#user-9) |
| /user/info | GET | [获取信息](user.md#user-10) |
| /user/knowledge/fetch | GET | [获取列表/数据](user.md#user-11) |
| /user/knowledge/getCategory | GET | [获取数据](user.md#user-12) |
| /user/newPeriod | POST | [user 模块接口](user.md#user-13) |
| /user/redeemgiftcard | POST | [user 模块接口](user.md#user-14) |
| /user/removeActiveSession | POST | [user 模块接口](user.md#user-15) |
| /user/resetSecurity | GET | [user 模块接口](user.md#user-16) |
| /user/server/fetch | GET | [获取列表/数据](user.md#user-17) |
| /user/stat/getTrafficLog | GET | [获取数据](user.md#user-18) |
| /user/telegram/getBotInfo | GET | [获取信息](user.md#user-19) |
| /user/transfer | POST | [user 模块接口](user.md#user-20) |
| /user/unbindTelegram | GET | [user 模块接口](user.md#user-21) |
| /user/update | POST | [更新](user.md#user-22) |

### plan

| URL | 请求 | 描述 |
| --- | --- | --- |
| /user/plan/fetch | GET | [获取列表/数据](plan.md#plan-1) |

### order

| URL | 请求 | 描述 |
| --- | --- | --- |
| /user/order/cancel | POST | [取消](order.md#order-1) |
| /user/order/check | GET | [检查/校验](order.md#order-2) |
| /user/order/checkout | POST | [检查/校验](order.md#order-3) |
| /user/order/detail | GET | [获取详情](order.md#order-4) |
| /user/order/fetch | GET | [获取列表/数据](order.md#order-5) |
| /user/order/getPaymentMethod | GET | [获取数据](order.md#order-6) |
| /user/order/save | POST | [保存](order.md#order-7) |

### invite

| URL | 请求 | 描述 |
| --- | --- | --- |
| /user/invite/details | GET | [获取详情](invite.md#invite-1) |
| /user/invite/fetch | GET | [获取列表/数据](invite.md#invite-2) |
| /user/invite/save | GET | [保存](invite.md#invite-3) |

### notice

| URL | 请求 | 描述 |
| --- | --- | --- |
| /user/notice/fetch | GET | [获取列表/数据](notice.md#notice-1) |

### ticket

| URL | 请求 | 描述 |
| --- | --- | --- |
| /user/ticket/close | POST | [关闭](ticket.md#ticket-1) |
| /user/ticket/fetch | GET | [获取列表/数据](ticket.md#ticket-2) |
| /user/ticket/reply | POST | [回复](ticket.md#ticket-3) |
| /user/ticket/save | POST | [保存](ticket.md#ticket-4) |
| /user/ticket/withdraw | POST | [user 模块接口](ticket.md#ticket-5) |

### guest

| URL | 请求 | 描述 |
| --- | --- | --- |
| /guest/comm/config | GET | [获取配置](guest.md#guest-1) |
| /guest/payment/notify/{method}/{uuid} | GET | [支付回调通知](guest.md#guest-2) |
| /guest/payment/notify/{method}/{uuid} | POST | [支付回调通知](guest.md#guest-3) |
| /guest/telegram/webhook | POST | [guest 模块接口](guest.md#guest-4) |

### client

| URL | 请求 | 描述 |
| --- | --- | --- |
| /client/app/getConfig | GET | [获取配置](client.md#client-1) |
| /client/app/getVersion | GET | [获取数据](client.md#client-2) |

### staff

| URL | 请求 | 描述 |
| --- | --- | --- |
| /staff/notice/drop | POST | [删除/移除](staff.md#staff-1) |
| /staff/notice/fetch | GET | [获取列表/数据](staff.md#staff-2) |
| /staff/notice/save | POST | [保存](staff.md#staff-3) |
| /staff/notice/update | POST | [更新](staff.md#staff-4) |
| /staff/plan/fetch | GET | [获取列表/数据](staff.md#staff-5) |
| /staff/ticket/close | POST | [关闭](staff.md#staff-6) |
| /staff/ticket/fetch | GET | [获取列表/数据](staff.md#staff-7) |
| /staff/ticket/reply | POST | [回复](staff.md#staff-8) |
| /staff/user/ban | POST | [封禁](staff.md#staff-9) |
| /staff/user/getUserInfoById | GET | [获取信息](staff.md#staff-10) |
| /staff/user/sendMail | POST | [发送邮件](staff.md#staff-11) |
| /staff/user/update | POST | [更新](staff.md#staff-12) |

### admin-config

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/config/fetch | GET | [获取后台系统配置（按分组返回站点、订阅、安全、邮件、前端等设置），用于管理后台配置页初始化。](admin-config.md#admin-config-1) |
| /{secure_path}/config/getEmailTemplate | GET | [获取配置](admin-config.md#admin-config-2) |
| /{secure_path}/config/getThemeTemplate | GET | [获取配置](admin-config.md#admin-config-3) |
| /{secure_path}/config/save | POST | [获取配置](admin-config.md#admin-config-4) |
| /{secure_path}/config/setTelegramWebhook | POST | [获取配置](admin-config.md#admin-config-5) |
| /{secure_path}/config/testSendMail | POST | [获取配置](admin-config.md#admin-config-6) |

### admin-server

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/server/anytls/copy | POST | [copy 模块接口](admin-server.md#admin-server-1) |
| /{secure_path}/server/anytls/drop | POST | [删除/移除](admin-server.md#admin-server-2) |
| /{secure_path}/server/anytls/save | POST | [保存](admin-server.md#admin-server-3) |
| /{secure_path}/server/anytls/update | POST | [更新](admin-server.md#admin-server-4) |
| /{secure_path}/server/group/drop | POST | [删除/移除](admin-server.md#admin-server-5) |
| /{secure_path}/server/group/fetch | GET | [获取列表/数据](admin-server.md#admin-server-6) |
| /{secure_path}/server/group/save | POST | [保存](admin-server.md#admin-server-7) |
| /{secure_path}/server/hysteria/copy | POST | [copy 模块接口](admin-server.md#admin-server-8) |
| /{secure_path}/server/hysteria/drop | POST | [删除/移除](admin-server.md#admin-server-9) |
| /{secure_path}/server/hysteria/save | POST | [保存](admin-server.md#admin-server-10) |
| /{secure_path}/server/hysteria/update | POST | [更新](admin-server.md#admin-server-11) |
| /{secure_path}/server/manage/getNodes | GET | [获取数据](admin-server.md#admin-server-12) |
| /{secure_path}/server/manage/sort | POST | [排序](admin-server.md#admin-server-13) |
| /{secure_path}/server/route/drop | POST | [删除/移除](admin-server.md#admin-server-14) |
| /{secure_path}/server/route/fetch | GET | [获取列表/数据](admin-server.md#admin-server-15) |
| /{secure_path}/server/route/save | POST | [保存](admin-server.md#admin-server-16) |
| /{secure_path}/server/shadowsocks/copy | POST | [copy 模块接口](admin-server.md#admin-server-17) |
| /{secure_path}/server/shadowsocks/drop | POST | [删除/移除](admin-server.md#admin-server-18) |
| /{secure_path}/server/shadowsocks/save | POST | [保存](admin-server.md#admin-server-19) |
| /{secure_path}/server/shadowsocks/update | POST | [更新](admin-server.md#admin-server-20) |
| /{secure_path}/server/trojan/copy | POST | [copy 模块接口](admin-server.md#admin-server-21) |
| /{secure_path}/server/trojan/drop | POST | [删除/移除](admin-server.md#admin-server-22) |
| /{secure_path}/server/trojan/save | POST | [保存](admin-server.md#admin-server-23) |
| /{secure_path}/server/trojan/update | POST | [更新](admin-server.md#admin-server-24) |
| /{secure_path}/server/tuic/copy | POST | [copy 模块接口](admin-server.md#admin-server-25) |
| /{secure_path}/server/tuic/drop | POST | [删除/移除](admin-server.md#admin-server-26) |
| /{secure_path}/server/tuic/save | POST | [保存](admin-server.md#admin-server-27) |
| /{secure_path}/server/tuic/update | POST | [更新](admin-server.md#admin-server-28) |
| /{secure_path}/server/v2node/copy | POST | [copy 模块接口](admin-server.md#admin-server-29) |
| /{secure_path}/server/v2node/drop | POST | [删除/移除](admin-server.md#admin-server-30) |
| /{secure_path}/server/v2node/save | POST | [保存](admin-server.md#admin-server-31) |
| /{secure_path}/server/v2node/update | POST | [更新](admin-server.md#admin-server-32) |
| /{secure_path}/server/vless/copy | POST | [copy 模块接口](admin-server.md#admin-server-33) |
| /{secure_path}/server/vless/drop | POST | [删除/移除](admin-server.md#admin-server-34) |
| /{secure_path}/server/vless/save | POST | [保存](admin-server.md#admin-server-35) |
| /{secure_path}/server/vless/update | POST | [更新](admin-server.md#admin-server-36) |
| /{secure_path}/server/vmess/copy | POST | [copy 模块接口](admin-server.md#admin-server-37) |
| /{secure_path}/server/vmess/drop | POST | [删除/移除](admin-server.md#admin-server-38) |
| /{secure_path}/server/vmess/save | POST | [保存](admin-server.md#admin-server-39) |
| /{secure_path}/server/vmess/update | POST | [更新](admin-server.md#admin-server-40) |

### admin-user

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/user/allDel | POST | [user 模块接口](admin-user.md#admin-user-1) |
| /{secure_path}/user/ban | POST | [封禁](admin-user.md#admin-user-2) |
| /{secure_path}/user/delUser | POST | [user 模块接口](admin-user.md#admin-user-3) |
| /{secure_path}/user/dumpCSV | POST | [user 模块接口](admin-user.md#admin-user-4) |
| /{secure_path}/user/fetch | GET | [获取列表/数据](admin-user.md#admin-user-5) |
| /{secure_path}/user/generate | POST | [生成](admin-user.md#admin-user-6) |
| /{secure_path}/user/getUserInfoById | GET | [获取信息](admin-user.md#admin-user-7) |
| /{secure_path}/user/resetSecret | POST | [user 模块接口](admin-user.md#admin-user-8) |
| /{secure_path}/user/sendMail | POST | [发送邮件](admin-user.md#admin-user-9) |
| /{secure_path}/user/setInviteUser | POST | [user 模块接口](admin-user.md#admin-user-10) |
| /{secure_path}/user/update | POST | [更新](admin-user.md#admin-user-11) |

### admin-order

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/order/assign | POST | [order 模块接口](admin-order.md#admin-order-1) |
| /{secure_path}/order/cancel | POST | [取消](admin-order.md#admin-order-2) |
| /{secure_path}/order/detail | POST | [获取详情](admin-order.md#admin-order-3) |
| /{secure_path}/order/fetch | GET | [获取列表/数据](admin-order.md#admin-order-4) |
| /{secure_path}/order/paid | POST | [order 模块接口](admin-order.md#admin-order-5) |
| /{secure_path}/order/update | POST | [更新](admin-order.md#admin-order-6) |

### admin-plan

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/plan/drop | POST | [删除/移除](admin-plan.md#admin-plan-1) |
| /{secure_path}/plan/fetch | GET | [获取列表/数据](admin-plan.md#admin-plan-2) |
| /{secure_path}/plan/save | POST | [保存](admin-plan.md#admin-plan-3) |
| /{secure_path}/plan/sort | POST | [排序](admin-plan.md#admin-plan-4) |
| /{secure_path}/plan/update | POST | [更新](admin-plan.md#admin-plan-5) |

### admin-payment

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/payment/drop | POST | [删除/移除](admin-payment.md#admin-payment-1) |
| /{secure_path}/payment/fetch | GET | [获取列表/数据](admin-payment.md#admin-payment-2) |
| /{secure_path}/payment/getPaymentForm | POST | [获取数据](admin-payment.md#admin-payment-3) |
| /{secure_path}/payment/getPaymentMethods | GET | [获取数据](admin-payment.md#admin-payment-4) |
| /{secure_path}/payment/save | POST | [保存](admin-payment.md#admin-payment-5) |
| /{secure_path}/payment/show | POST | [显示/启用](admin-payment.md#admin-payment-6) |
| /{secure_path}/payment/sort | POST | [排序](admin-payment.md#admin-payment-7) |

### admin-ticket

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/ticket/close | POST | [关闭](admin-ticket.md#admin-ticket-1) |
| /{secure_path}/ticket/fetch | GET | [获取列表/数据](admin-ticket.md#admin-ticket-2) |
| /{secure_path}/ticket/reply | POST | [回复](admin-ticket.md#admin-ticket-3) |

### admin-knowledge

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/knowledge/drop | POST | [删除/移除](admin-knowledge.md#admin-knowledge-1) |
| /{secure_path}/knowledge/fetch | GET | [获取列表/数据](admin-knowledge.md#admin-knowledge-2) |
| /{secure_path}/knowledge/getCategory | GET | [获取数据](admin-knowledge.md#admin-knowledge-3) |
| /{secure_path}/knowledge/save | POST | [保存](admin-knowledge.md#admin-knowledge-4) |
| /{secure_path}/knowledge/show | POST | [显示/启用](admin-knowledge.md#admin-knowledge-5) |
| /{secure_path}/knowledge/sort | POST | [排序](admin-knowledge.md#admin-knowledge-6) |

### admin-notice

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/notice/drop | POST | [删除/移除](admin-notice.md#admin-notice-1) |
| /{secure_path}/notice/fetch | GET | [获取列表/数据](admin-notice.md#admin-notice-2) |
| /{secure_path}/notice/save | POST | [保存](admin-notice.md#admin-notice-3) |
| /{secure_path}/notice/show | POST | [显示/启用](admin-notice.md#admin-notice-4) |
| /{secure_path}/notice/update | POST | [更新](admin-notice.md#admin-notice-5) |

### admin-coupon

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/coupon/drop | POST | [删除/移除](admin-coupon.md#admin-coupon-1) |
| /{secure_path}/coupon/fetch | GET | [获取列表/数据](admin-coupon.md#admin-coupon-2) |
| /{secure_path}/coupon/generate | POST | [生成](admin-coupon.md#admin-coupon-3) |
| /{secure_path}/coupon/show | POST | [显示/启用](admin-coupon.md#admin-coupon-4) |

### admin-giftcard

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/giftcard/drop | POST | [删除/移除](admin-giftcard.md#admin-giftcard-1) |
| /{secure_path}/giftcard/fetch | GET | [获取列表/数据](admin-giftcard.md#admin-giftcard-2) |
| /{secure_path}/giftcard/generate | POST | [生成](admin-giftcard.md#admin-giftcard-3) |

### admin-theme

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/theme/getThemeConfig | POST | [获取配置](admin-theme.md#admin-theme-1) |
| /{secure_path}/theme/getThemes | GET | [获取数据](admin-theme.md#admin-theme-2) |
| /{secure_path}/theme/saveThemeConfig | POST | [获取配置](admin-theme.md#admin-theme-3) |

### admin-stat

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/stat/getOrder | GET | [获取数据](admin-stat.md#admin-stat-1) |
| /{secure_path}/stat/getOverride | GET | [获取数据](admin-stat.md#admin-stat-2) |
| /{secure_path}/stat/getRanking | GET | [获取数据](admin-stat.md#admin-stat-3) |
| /{secure_path}/stat/getServerLastRank | GET | [获取数据](admin-stat.md#admin-stat-4) |
| /{secure_path}/stat/getServerTodayRank | GET | [获取数据](admin-stat.md#admin-stat-5) |
| /{secure_path}/stat/getStat | GET | [获取数据](admin-stat.md#admin-stat-6) |
| /{secure_path}/stat/getStatRecord | GET | [获取数据](admin-stat.md#admin-stat-7) |
| /{secure_path}/stat/getStatUser | GET | [获取数据](admin-stat.md#admin-stat-8) |
| /{secure_path}/stat/getUserLastRank | GET | [获取数据](admin-stat.md#admin-stat-9) |
| /{secure_path}/stat/getUserTodayRank | GET | [获取数据](admin-stat.md#admin-stat-10) |

### admin-system

| URL | 请求 | 描述 |
| --- | --- | --- |
| /{secure_path}/system/getQueueMasters | GET | [获取数据](admin-system.md#admin-system-1) |
| /{secure_path}/system/getQueueStats | GET | [获取数据](admin-system.md#admin-system-2) |
| /{secure_path}/system/getQueueWorkload | GET | [获取数据](admin-system.md#admin-system-3) |
| /{secure_path}/system/getSystemLog | GET | [获取数据](admin-system.md#admin-system-4) |
| /{secure_path}/system/getSystemStatus | GET | [获取数据](admin-system.md#admin-system-5) |

### node-backend

| URL | 请求 | 描述 |
| --- | --- | --- |
| /client/subscribe | GET | [订阅](node-backend.md#node-backend-1) |
| /server/deepbwork/config | ANY | [节点后端交互接口](node-backend.md#node-backend-2) |
| /server/deepbwork/submit | ANY | [节点后端交互接口](node-backend.md#node-backend-3) |
| /server/deepbwork/user | ANY | [节点后端交互接口](node-backend.md#node-backend-4) |
| /server/shadowsocksTidalab/submit | ANY | [节点后端交互接口](node-backend.md#node-backend-5) |
| /server/shadowsocksTidalab/user | ANY | [节点后端交互接口](node-backend.md#node-backend-6) |
| /server/trojanTidalab/config | ANY | [节点后端交互接口](node-backend.md#node-backend-7) |
| /server/trojanTidalab/submit | ANY | [节点后端交互接口](node-backend.md#node-backend-8) |
| /server/trojanTidalab/user | ANY | [节点后端交互接口](node-backend.md#node-backend-9) |
| /server/uniProxy/alive | ANY | [节点后端交互接口](node-backend.md#node-backend-10) |
| /server/uniProxy/alivelist | ANY | [节点后端交互接口](node-backend.md#node-backend-11) |
| /server/uniProxy/config | ANY | [节点后端交互接口](node-backend.md#node-backend-12) |
| /server/uniProxy/push | ANY | [节点后端交互接口](node-backend.md#node-backend-13) |
| /server/uniProxy/user | ANY | [节点后端交互接口](node-backend.md#node-backend-14) |
