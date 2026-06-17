# guest

<a id="guest-1"></a>
## 1.获取配置

> `GET` /guest/comm/config

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "tos_url": null,
    "is_email_verify": 0,
    "is_invite_force": 0,
    "email_whitelist_suffix": 0,
    "is_recaptcha": 0,
    "recaptcha_site_key": null,
    "app_description": null,
    "app_url": null,
    "logo": null
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| tos_url | null | 字段含义需结合具体业务对象确认 |
| is_email_verify | number | 字段含义需结合具体业务对象确认 |
| is_invite_force | number | 字段含义需结合具体业务对象确认 |
| email_whitelist_suffix | number | 字段含义需结合具体业务对象确认 |
| is_recaptcha | number | 字段含义需结合具体业务对象确认 |
| recaptcha_site_key | null | 字段含义需结合具体业务对象确认 |
| app_description | null | 字段含义需结合具体业务对象确认 |
| app_url | null | 字段含义需结合具体业务对象确认 |
| logo | null | 字段含义需结合具体业务对象确认 |

<a id="guest-2"></a>
## 2.支付回调通知

> `GET` /guest/payment/notify/{method}/{uuid}

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| method | string | ✔︎ | 支付方式（路由参数） |
| uuid | string | ✔︎ | 支付配置 UUID（路由参数） |

<a id="guest-3"></a>
## 3.支付回调通知

> `POST` /guest/payment/notify/{method}/{uuid}

- 请求参数 `json`

```json
{
  "method": "string",
  "uuid": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| method | string | ✔︎ | 支付方式（路由参数） |
| uuid | string | ✔︎ | 支付配置 UUID（路由参数） |

<a id="guest-4"></a>
## 4.guest 模块接口

> `POST` /guest/telegram/webhook

- 请求参数
  `null`
