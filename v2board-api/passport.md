# passport

<a id="passport-1"></a>
## 1.忘记密码/重置邮件

> `POST` /passport/auth/forget

- 请求参数 `json`

```json
{
  "email": "demo@example.com",
  "password": "string",
  "email_code": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | email | ✔︎ |  |
| password | string | ✔︎ |  |
| email_code | string | ✔︎ |  |

- 成功返回示例 `json`

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "password": [
      "密码不能为空"
    ],
    "email_code": [
      "邮箱验证码不能为空"
    ]
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| message | string |  |
| errors.password[0] | string |  |
| errors.email_code[0] | string |  |

<a id="passport-2"></a>
## 2.登录

> `POST` /passport/auth/getQuickLoginUrl

- 请求参数 `json`

```json
{
  "auth_data": "string",
  "redirect": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| auth_data | unknown | ✖︎ |  |
| redirect | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="passport-3"></a>
## 3.登录

> `POST` /passport/auth/login

- 请求参数 `json`

```json
{
  "email": "demo@example.com",
  "password": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | email | ✔︎ |  |
| password | string | ✔︎ |  |

- 成功返回示例 `json`

```json
{
  "data": {
    "token": "2d025d7c70b2d673d98ac63ebef1c303",
    "is_admin": 0,
    "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwic2Vzc2lvbiI6IjE0NDkxYTQ4N2U3ZWIzMjg2NzIzMzYxYzJmNDg1NjY1In0.geCqYkvwHxAgZHIhjOKkfH9NaMphugp7n-1uHoLMQq4"
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| token | string |  |
| is_admin | number |  |
| auth_data | string |  |

<a id="passport-4"></a>
## 4.登录

> `POST` /passport/auth/loginWithMailLink

- 请求参数 `json`

```json
{
  "email": "demo@example.com",
  "redirect": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | email | ✔︎ |  |
| redirect | string | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="passport-5"></a>
## 5.注册

> `POST` /passport/auth/register

- 请求参数 `json`

```json
{
  "email": "demo@example.com",
  "password": "string",
  "recaptcha_data": "string",
  "invite_code": "string",
  "email_code": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | email | ✔︎ |  |
| password | string | ✔︎ |  |
| recaptcha_data | unknown | ✖︎ |  |
| invite_code | unknown | ✔︎ |  |
| email_code | unknown | ✔︎ |  |

- 成功返回示例 `json`

```json
{
  "data": {
    "token": "b44cff5dc45a2d6a01b9a18aa5fc793c",
    "is_admin": null,
    "auth_data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nywic2Vzc2lvbiI6IjYwODcyNWI2ZjdlYzczN2YxMGI0MjQ1MGY0ZWI2NjhjIn0.a3R4Jj4wfzhXaD5V2Wo_7LyIZHcIo9b7-w1fhI0pIlo"
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| token | string |  |
| is_admin | null |  |
| auth_data | string |  |

<a id="passport-6"></a>
## 6.登录

> `GET` /passport/auth/token2Login

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | unknown | ✖︎ |  |
| redirect | unknown | ✖︎ |  |
| verify | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="passport-7"></a>
## 7.passport 模块接口

> `POST` /passport/comm/pv

- 请求参数 `json`

```json
{
  "invite_code": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| invite_code | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="passport-8"></a>
## 8.passport 模块接口

> `POST` /passport/comm/sendEmailVerify

- 请求参数 `json`

```json
{
  "email": "demo@example.com",
  "recaptcha_data": "string",
  "isforget": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | email | ✔︎ |  |
| recaptcha_data | unknown | ✖︎ |  |
| isforget | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
