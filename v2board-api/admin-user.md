# admin-user

<a id="admin-user-1"></a>
## 1.user 模块接口

> `POST` /{secure_path}/user/allDel

- 请求参数 `json`

```json
{
  "sort_type": "string",
  "sort": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sort_type | unknown | ✖︎ |  |
| sort | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-user-2"></a>
## 2.封禁

> `POST` /{secure_path}/user/ban

- 请求参数 `json`

```json
{
  "sort_type": "string",
  "sort": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sort_type | unknown | ✖︎ |  |
| sort | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-user-3"></a>
## 3.user 模块接口

> `POST` /{secure_path}/user/delUser

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

<a id="admin-user-4"></a>
## 4.user 模块接口

> `POST` /{secure_path}/user/dumpCSV

- 请求参数
  `null`

<a id="admin-user-5"></a>
## 5.获取列表/数据

> `GET` /{secure_path}/user/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter.*.key | string | ✔︎ |  |
| filter.*.condition | string | ✔︎ |  |
| filter.*.value | string | ✔︎ |  |
| current | unknown | ✖︎ |  |
| pageSize | unknown | ✖︎ |  |
| sort_type | unknown | ✖︎ |  |
| sort | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
| total | unknown | 总数 |

<a id="admin-user-6"></a>
## 6.生成

> `POST` /{secure_path}/user/generate

- 请求参数 `json`

```json
{
  "generate_count": 1,
  "expired_at": 1,
  "plan_id": 1,
  "email_prefix": "string",
  "email_suffix": "string",
  "password": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| generate_count | integer | ✖︎ |  |
| expired_at | integer | ✖︎ |  |
| plan_id | integer | ✖︎ |  |
| email_prefix | string | ✖︎ |  |
| email_suffix | string | ✔︎ |  |
| password | string | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-user-7"></a>
## 7.获取信息

> `GET` /{secure_path}/user/getUserInfoById

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-user-8"></a>
## 8.user 模块接口

> `POST` /{secure_path}/user/resetSecret

- 请求参数 `json`

```json
{
  "id": "string",
  "filter": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✖︎ |  |
| filter | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-user-9"></a>
## 9.发送邮件

> `POST` /{secure_path}/user/sendMail

- 请求参数 `json`

```json
{
  "subject": "string",
  "content": "string",
  "sort_type": "string",
  "sort": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subject | string | ✔︎ |  |
| content | string | ✔︎ |  |
| sort_type | unknown | ✖︎ |  |
| sort | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-user-10"></a>
## 10.user 模块接口

> `POST` /{secure_path}/user/setInviteUser

- 请求参数
  `null`

<a id="admin-user-11"></a>
## 11.更新

> `POST` /{secure_path}/user/update

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
| id | unknown | ✖︎ |  |
| invite_user_email | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
