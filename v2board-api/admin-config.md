# admin-config

<a id="admin-config-1"></a>
## 1.获取后台系统配置（按分组返回站点、订阅、安全、邮件、前端等设置），用于管理后台配置页初始化。

> `GET` /{secure_path}/config/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| 无 | - | ✖︎ | 该接口通常无需请求参数，管理员鉴权后直接返回当前配置。 |

- 成功返回示例 `json`

```json
{
  "data": {
    "ticket": {
      "ticket_status": 0
    },
    "deposit": {
      "deposit_bounus": []
    },
    "invite": {
      "invite_force": 0,
      "invite_commission": 10,
      "invite_gen_limit": 5,
      "invite_never_expire": 0,
      "commission_first_time_enable": 1,
      "commission_auto_check_enable": 1,
      "commission_withdraw_limit": 100,
      "commission_withdraw_method": [
        "支付宝",
        "USDT",
        "Paypal"
      ],
      "withdraw_close_enable": 0,
      "commission_distribution_enable": 0,
      "commission_distribution_l1": null,
      "commission_distribution_l2": null,
      "commission_distribution_l3": null
    },
    "site": {
      "logo": null,
      "force_https": 0,
      "stop_register": 0,
      "app_name": "V2Board",
      "app_description": "V2Board is best!",
      "app_url": null,
      "subscribe_url": null,
      "subscribe_path": null,
      "try_out_plan_id": 0,
      "try_out_hour": 1,
      "tos_url": null,
      "currency": "CNY",
      "currency_symbol": "¥"
    },
    "subscribe": {
      "plan_change_enable": 1,
      "reset_traffic_method": 0,
      "surplus_enable": 1,
      "allow_new_period": 0,
      "new_order_event_id": 0,
      "renew_order_event_id": 0,
      "change_order_event_id": 0,
      "show_info_to_server_enable": 0,
      "show_subscribe_method": 0,
      "show_subscribe_expire": 5
    },
    "frontend": {
      "frontend_theme": "v2board",
      "frontend_theme_sidebar": "light",
      "frontend_theme_header": "dark",
      "frontend_theme_color": "default",
      "frontend_background_url": null
    },
    "server": {
      "server_api_url": null,
      "server_token": null,
      "server_pull_interval": 60,
      "server_push_interval": 60,
      "server_node_report_min_traffic": 0,
      "server_device_online_min_traffic": 0,
      "device_limit_mode": 0
    },
    "email": {
      "email_template": "default",
      "email_host": null,
      "email_port": null,
      "email_username": null,
      "email_password": null,
      "email_encryption": null,
      "email_from_address": null
    },
    "telegram": {
      "telegram_bot_enable": 0,
      "telegram_bot_token": null,
      "telegram_discuss_link": null
    },
    "app": {
      "windows_version": null,
      "windows_download_url": null,
      "macos_version": null,
      "macos_download_url": null,
      "android_version": null,
      "android_download_url": null
    },
    "safe": {
      "email_verify": 0,
      "safe_mode_enable": 0,
      "secure_path": "2981bd12",
      "email_whitelist_enable": 0,
      "email_whitelist_suffix": [
        "gmail.com",
        "qq.com",
        "163.com",
        "yahoo.com",
        "sina.com",
        "126.com",
        "outlook.com",
        "yeah.net",
        "foxmail.com"
      ],
      "email_gmail_limit_enable": 0,
      "recaptcha_enable": 0,
      "recaptcha_key": null,
      "recaptcha_site_key": null,
      "register_limit_by_ip_enable": 0,
      "register_limit_count": 3,
      "register_limit_expire": 60,
      "password_limit_enable": 1,
      "password_limit_count": 5,
      "password_limit_expire": 60
    }
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| ticket.ticket_status | number |  |
| deposit.deposit_bounus | array |  |
| invite.invite_force | number |  |
| invite.invite_commission | number |  |
| invite.invite_gen_limit | number |  |
| invite.invite_never_expire | number |  |
| invite.commission_first_time_enable | number |  |
| invite.commission_auto_check_enable | number |  |
| invite.commission_withdraw_limit | number |  |
| invite.commission_withdraw_method[0] | string |  |
| invite.withdraw_close_enable | number |  |
| invite.commission_distribution_enable | number |  |
| invite.commission_distribution_l1 | null |  |
| invite.commission_distribution_l2 | null |  |
| invite.commission_distribution_l3 | null |  |
| site.logo | null |  |
| site.force_https | number |  |
| site.stop_register | number |  |
| site.app_name | string |  |
| site.app_description | string |  |
| site.app_url | null |  |
| site.subscribe_url | null |  |
| site.subscribe_path | null |  |
| site.try_out_plan_id | number |  |
| site.try_out_hour | number |  |
| site.tos_url | null |  |
| site.currency | string |  |
| site.currency_symbol | string |  |
| subscribe.plan_change_enable | number |  |
| subscribe.reset_traffic_method | number |  |
| subscribe.surplus_enable | number |  |
| subscribe.allow_new_period | number |  |
| subscribe.new_order_event_id | number |  |
| subscribe.renew_order_event_id | number |  |
| subscribe.change_order_event_id | number |  |
| subscribe.show_info_to_server_enable | number |  |
| subscribe.show_subscribe_method | number |  |
| subscribe.show_subscribe_expire | number |  |
| frontend.frontend_theme | string |  |
| frontend.frontend_theme_sidebar | string |  |
| frontend.frontend_theme_header | string |  |
| frontend.frontend_theme_color | string |  |
| frontend.frontend_background_url | null |  |
| server.server_api_url | null |  |
| server.server_token | null |  |
| server.server_pull_interval | number |  |
| server.server_push_interval | number |  |
| server.server_node_report_min_traffic | number |  |
| server.server_device_online_min_traffic | number |  |
| server.device_limit_mode | number |  |
| email.email_template | string |  |
| email.email_host | null |  |
| email.email_port | null |  |
| email.email_username | null |  |
| email.email_password | null |  |
| email.email_encryption | null |  |
| email.email_from_address | null |  |
| telegram.telegram_bot_enable | number |  |
| telegram.telegram_bot_token | null |  |
| telegram.telegram_discuss_link | null |  |
| app.windows_version | null |  |
| app.windows_download_url | null |  |
| app.macos_version | null |  |
| app.macos_download_url | null |  |
| app.android_version | null |  |
| app.android_download_url | null |  |
| safe.email_verify | number |  |
| safe.safe_mode_enable | number |  |
| safe.secure_path | string |  |
| safe.email_whitelist_enable | number |  |
| safe.email_whitelist_suffix[0] | string |  |
| safe.email_gmail_limit_enable | number |  |
| safe.recaptcha_enable | number |  |
| safe.recaptcha_key | null |  |
| safe.recaptcha_site_key | null |  |
| safe.register_limit_by_ip_enable | number |  |
| safe.register_limit_count | number |  |
| safe.register_limit_expire | number |  |
| safe.password_limit_enable | number |  |
| safe.password_limit_count | number |  |
| safe.password_limit_expire | number |  |

<a id="admin-config-2"></a>
## 2.获取配置

> `GET` /{secure_path}/config/getEmailTemplate

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": [
    "classic",
    "default"
  ]
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data[0] | string |  |

<a id="admin-config-3"></a>
## 3.获取配置

> `GET` /{secure_path}/config/getThemeTemplate

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": [
    "default"
  ]
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data[0] | string |  |

<a id="admin-config-4"></a>
## 4.获取配置

> `POST` /{secure_path}/config/save

- 请求参数 `json`

```json
{
  "app_url.url": "string",
  "subscribe_url.url": "string",
  "subscribe_path.regex": "string",
  "server_token.min": "string",
  "tos_url.url": "string",
  "telegram_discuss_link.url": "string",
  "logo.url": "string",
  "secure_path.min": "string",
  "secure_path.regex": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| app_url.url | string | ✖︎ |  |
| subscribe_url.url | string | ✖︎ |  |
| subscribe_path.regex | string | ✖︎ |  |
| server_token.min | string | ✖︎ |  |
| tos_url.url | string | ✖︎ |  |
| telegram_discuss_link.url | string | ✖︎ |  |
| logo.url | string | ✖︎ |  |
| secure_path.min | string | ✖︎ |  |
| secure_path.regex | string | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-config-5"></a>
## 5.获取配置

> `POST` /{secure_path}/config/setTelegramWebhook

- 请求参数 `json`

```json
{
  "telegram_bot_token": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| telegram_bot_token | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-config-6"></a>
## 6.获取配置

> `POST` /{secure_path}/config/testSendMail

- 请求参数
  `null`

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
| log | unknown | 字段含义需结合具体业务对象确认 |
