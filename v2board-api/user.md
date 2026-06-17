# user

<a id="user-1"></a>
## 1.user 模块接口

> `POST` /user/changePassword

- 请求参数 `json`

```json
{
  "old_password": "string",
  "new_password": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| old_password | string | ✔︎ |  |
| new_password | string | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="user-2"></a>
## 2.登录

> `GET` /user/checkLogin

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "is_login": true
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| is_login | boolean |  |

<a id="user-3"></a>
## 3.获取配置

> `GET` /user/comm/config

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "is_telegram": 0,
    "telegram_discuss_link": null,
    "stripe_pk": null,
    "withdraw_methods": [
      "支付宝",
      "USDT",
      "Paypal"
    ],
    "withdraw_close": 0,
    "currency": "CNY",
    "currency_symbol": "¥",
    "commission_distribution_enable": 0,
    "commission_distribution_l1": null,
    "commission_distribution_l2": null,
    "commission_distribution_l3": null
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| is_telegram | number | 字段含义需结合具体业务对象确认 |
| telegram_discuss_link | null | 字段含义需结合具体业务对象确认 |
| stripe_pk | null | 字段含义需结合具体业务对象确认 |
| withdraw_methods[0] | string |  |
| withdraw_close | number | 字段含义需结合具体业务对象确认 |
| currency | string | 字段含义需结合具体业务对象确认 |
| currency_symbol | string | 字段含义需结合具体业务对象确认 |
| commission_distribution_enable | number | 字段含义需结合具体业务对象确认 |
| commission_distribution_l1 | null | 字段含义需结合具体业务对象确认 |
| commission_distribution_l2 | null | 字段含义需结合具体业务对象确认 |
| commission_distribution_l3 | null | 字段含义需结合具体业务对象确认 |

<a id="user-4"></a>
## 4.获取数据

> `POST` /user/comm/getStripePublicKey

- 请求参数 `json`

```json
{
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="user-5"></a>
## 5.检查/校验

> `POST` /user/coupon/check

- 请求参数 `json`

```json
{
  "code": "string",
  "plan_id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | unknown | ✔︎ |  |
| plan_id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="user-6"></a>
## 6.获取数据

> `GET` /user/getActiveSession

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "a9292bcc490e5e355949c93821541c30": {
      "ip": "127.0.0.1",
      "login_at": 1774177209,
      "ua": "Symfony",
      "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic2Vzc2lvbiI6ImE5MjkyYmNjNDkwZTVlMzU1OTQ5YzkzODIxNTQxYzMwIn0.ZMvD5KMSjeXwgS6d_Wv9u41gLRaXbm8uM7WNIuM_eyY"
    },
    "31e79c1991c54df8786aa90bfc884f64": {
      "ip": "127.0.0.1",
      "login_at": 1774177276,
      "ua": "Symfony",
      "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic2Vzc2lvbiI6IjMxZTc5YzE5OTFjNTRkZjg3ODZhYTkwYmZjODg0ZjY0In0.KIGgaGFwjuIEDM__rBt4dvCb78fKKn-IhqMTsD6Sjyk"
    },
    "74f2e21d9ed4dafb927129691b3f4766": {
      "ip": "127.0.0.1",
      "login_at": 1774177287,
      "ua": "Symfony",
      "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic2Vzc2lvbiI6Ijc0ZjJlMjFkOWVkNGRhZmI5MjcxMjk2OTFiM2Y0NzY2In0._19MIZOAq94k9kh82wht7uQOFX0qWyEDKJn-qyg1h6s"
    },
    "2ffb9dd62cf347f576a487deaab45c44": {
      "ip": "127.0.0.1",
      "login_at": 1774177288,
      "ua": "Symfony",
      "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic2Vzc2lvbiI6IjJmZmI5ZGQ2MmNmMzQ3ZjU3NmE0ODdkZWFhYjQ1YzQ0In0.3KSETw6AjwSrg7A5ofkaLvBZmolkTDuXcWxf25CWQ4M"
    },
    "172ada32ea3b93a74827edbda3c55c3b": {
      "ip": "127.0.0.1",
      "login_at": 1774177347,
      "ua": "Symfony",
      "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic2Vzc2lvbiI6IjE3MmFkYTMyZWEzYjkzYTc0ODI3ZWRiZGEzYzU1YzNiIn0.tGe-f-vg-hR9ZmowZUnkd63Tpj_vdJpKlZxrzNKQU6w"
    },
    "1240dbd967235e4f5fea17be92055c88": {
      "ip": "127.0.0.1",
      "login_at": 1774177348,
      "ua": "Symfony",
      "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic2Vzc2lvbiI6IjEyNDBkYmQ5NjcyMzVlNGY1ZmVhMTdiZTkyMDU1Yzg4In0.n14ZTmxZnIw4w4VqIoR9M45NGI89_9nfek39I0ujYTg"
    },
    "e52e52763e3cf5c4637925f5e012ca7d": {
      "ip": "127.0.0.1",
      "login_at": 1774177474,
      "ua": "Symfony",
      "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic2Vzc2lvbiI6ImU1MmU1Mjc2M2UzY2Y1YzQ2Mzc5MjVmNWUwMTJjYTdkIn0.sRXB7KcNFNZCCQHSbKouUQ8J2DpeDmWmi38h-8M7lfA"
    },
    "14491a487e7eb3286723361c2f485665": {
      "ip": "127.0.0.1",
      "login_at": 1774177474,
      "ua": "Symfony",
      "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic2Vzc2lvbiI6IjE0NDkxYTQ4N2U3ZWIzMjg2NzIzMzYxYzJmNDg1NjY1In0.geCqYkvwHxAgZHIhjOKkfH9NaMphugp7n-1uHoLMQq4"
    }
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| a9292bcc490e5e355949c93821541c30.ip | string |  |
| a9292bcc490e5e355949c93821541c30.login_at | number |  |
| a9292bcc490e5e355949c93821541c30.ua | string |  |
| a9292bcc490e5e355949c93821541c30.auth_data | string |  |
| 31e79c1991c54df8786aa90bfc884f64.ip | string |  |
| 31e79c1991c54df8786aa90bfc884f64.login_at | number |  |
| 31e79c1991c54df8786aa90bfc884f64.ua | string |  |
| 31e79c1991c54df8786aa90bfc884f64.auth_data | string |  |
| 74f2e21d9ed4dafb927129691b3f4766.ip | string |  |
| 74f2e21d9ed4dafb927129691b3f4766.login_at | number |  |
| 74f2e21d9ed4dafb927129691b3f4766.ua | string |  |
| 74f2e21d9ed4dafb927129691b3f4766.auth_data | string |  |
| 2ffb9dd62cf347f576a487deaab45c44.ip | string |  |
| 2ffb9dd62cf347f576a487deaab45c44.login_at | number |  |
| 2ffb9dd62cf347f576a487deaab45c44.ua | string |  |
| 2ffb9dd62cf347f576a487deaab45c44.auth_data | string |  |
| 172ada32ea3b93a74827edbda3c55c3b.ip | string |  |
| 172ada32ea3b93a74827edbda3c55c3b.login_at | number |  |
| 172ada32ea3b93a74827edbda3c55c3b.ua | string |  |
| 172ada32ea3b93a74827edbda3c55c3b.auth_data | string |  |
| 1240dbd967235e4f5fea17be92055c88.ip | string |  |
| 1240dbd967235e4f5fea17be92055c88.login_at | number |  |
| 1240dbd967235e4f5fea17be92055c88.ua | string |  |
| 1240dbd967235e4f5fea17be92055c88.auth_data | string |  |
| e52e52763e3cf5c4637925f5e012ca7d.ip | string |  |
| e52e52763e3cf5c4637925f5e012ca7d.login_at | number |  |
| e52e52763e3cf5c4637925f5e012ca7d.ua | string |  |
| e52e52763e3cf5c4637925f5e012ca7d.auth_data | string |  |
| 14491a487e7eb3286723361c2f485665.ip | string |  |
| 14491a487e7eb3286723361c2f485665.login_at | number |  |
| 14491a487e7eb3286723361c2f485665.ua | string |  |
| 14491a487e7eb3286723361c2f485665.auth_data | string |  |

<a id="user-7"></a>
## 7.登录

> `POST` /user/getQuickLoginUrl

- 请求参数 `json`

```json
{
  "redirect": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| redirect | unknown | ✖︎ |  |

- 成功返回示例 `json`

```json
{
  "data": "http://localhost/#/login?verify=229b22faf37140cd5a21d7a1a5163662&redirect=dashboard"
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | string | 主返回数据体 |

<a id="user-8"></a>
## 8.获取数据

> `GET` /user/getStat

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": [
    0,
    0,
    0
  ]
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data[0] | number |  |

<a id="user-9"></a>
## 9.获取数据

> `GET` /user/getSubscribe

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "plan_id": null,
    "token": "2d025d7c70b2d673d98ac63ebef1c303",
    "expired_at": 0,
    "u": 0,
    "d": 0,
    "transfer_enable": 0,
    "device_limit": null,
    "email": "doc_user@local.test",
    "uuid": "025937ae-42c2-43ab-b3c0-a88cda452d65",
    "alive_ip": 0,
    "subscribe_url": "http://localhost/api/v1/client/subscribe?token=2d025d7c70b2d673d98ac63ebef1c303",
    "reset_day": null,
    "allow_new_period": 0
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| plan_id | null |  |
| token | string |  |
| expired_at | number |  |
| u | number |  |
| d | number |  |
| transfer_enable | number |  |
| device_limit | null |  |
| email | string |  |
| uuid | string |  |
| alive_ip | number |  |
| subscribe_url | string |  |
| reset_day | null |  |
| allow_new_period | number |  |

<a id="user-10"></a>
## 10.获取信息

> `GET` /user/info

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "email": "doc_user@local.test",
    "transfer_enable": 0,
    "device_limit": null,
    "last_login_at": 1774176417,
    "created_at": 1774176417,
    "banned": 0,
    "auto_renewal": 0,
    "remind_expire": 1,
    "remind_traffic": 1,
    "expired_at": 0,
    "balance": 0,
    "commission_balance": 0,
    "plan_id": null,
    "discount": null,
    "commission_rate": null,
    "telegram_id": null,
    "uuid": "025937ae-42c2-43ab-b3c0-a88cda452d65",
    "avatar_url": "https://cravatar.cn/avatar/94dcaf82eaf0e2d2228985904e9fd3e1?s=64&d=identicon"
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| email | string |  |
| transfer_enable | number |  |
| device_limit | null |  |
| last_login_at | number |  |
| created_at | number |  |
| banned | number |  |
| auto_renewal | number |  |
| remind_expire | number |  |
| remind_traffic | number |  |
| expired_at | number |  |
| balance | number |  |
| commission_balance | number |  |
| plan_id | null |  |
| discount | null |  |
| commission_rate | null |  |
| telegram_id | null |  |
| uuid | string |  |
| avatar_url | string |  |

<a id="user-11"></a>
## 11.获取列表/数据

> `GET` /user/knowledge/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✖︎ |  |
| language | unknown | ✖︎ |  |
| keyword | unknown | ✖︎ |  |

- 成功返回示例 `json`

```json
{
  "data": []
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | array | 主返回数据体 |

<a id="user-12"></a>
## 12.获取数据

> `GET` /user/knowledge/getCategory

- 请求参数
  `null`

<a id="user-13"></a>
## 13.user 模块接口

> `POST` /user/newPeriod

- 请求参数
  `null`

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="user-14"></a>
## 14.user 模块接口

> `POST` /user/redeemgiftcard

- 请求参数 `json`

```json
{
  "giftcard": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| giftcard | string | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
| type | unknown | 返回类型/支付类型/节点类型（视接口而定） |
| value | unknown | 字段含义需结合具体业务对象确认 |

<a id="user-15"></a>
## 15.user 模块接口

> `POST` /user/removeActiveSession

- 请求参数 `json`

```json
{
  "id": "string",
  "session_id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✖︎ |  |
| session_id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="user-16"></a>
## 16.user 模块接口

> `GET` /user/resetSecurity

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": "http://localhost/api/v1/client/subscribe?token=46610eadbec5fe159658ce32ddc6ceeb"
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | string | 主返回数据体 |

<a id="user-17"></a>
## 17.获取列表/数据

> `GET` /user/server/fetch

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": []
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | array | 主返回数据体 |

<a id="user-18"></a>
## 18.获取数据

> `GET` /user/stat/getTrafficLog

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": []
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | array | 主返回数据体 |

<a id="user-19"></a>
## 19.获取信息

> `GET` /user/telegram/getBotInfo

- 请求参数
  `null`

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
| username | unknown | 字段含义需结合具体业务对象确认 |

<a id="user-20"></a>
## 20.user 模块接口

> `POST` /user/transfer

- 请求参数 `json`

```json
{
  "amount": "string",
  "transfer_amount": 1
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| amount | unknown | ✖︎ |  |
| transfer_amount | integer | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="user-21"></a>
## 21.user 模块接口

> `GET` /user/unbindTelegram

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": true
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | boolean | 主返回数据体 |

<a id="user-22"></a>
## 22.更新

> `POST` /user/update

- 请求参数 `json`

```json
{
  "auto_renewal": "string",
  "remind_expire": "string",
  "remind_traffic": "string",
  "email": "demo@example.com",
  "password": "string",
  "transfer_enable": 1,
  "device_limit": 1,
  "expired_at": 1,
  "banned": "string",
  "plan_id": 1,
  "commission_rate": 1,
  "discount": 1
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| auto_renewal | unknown | ✖︎ |  |
| remind_expire | unknown | ✖︎ |  |
| remind_traffic | unknown | ✖︎ |  |
| email | email | ✔︎ |  |
| password | string | ✖︎ |  |
| transfer_enable | number | ✖︎ |  |
| device_limit | integer | ✖︎ |  |
| expired_at | integer | ✖︎ |  |
| banned | string | ✔︎ |  |
| plan_id | integer | ✖︎ |  |
| commission_rate | integer | ✖︎ |  |
| discount | integer | ✖︎ |  |
| u | integer | ✖︎ |  |
| d | integer | ✖︎ |  |
| balance | integer | ✖︎ |  |
| commission_balance | integer | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
