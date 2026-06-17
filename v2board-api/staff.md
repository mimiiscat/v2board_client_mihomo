# staff

<a id="staff-1"></a>
## 1.删除/移除

> `POST` /staff/notice/drop

- 请求参数 `json`

```json
{
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="staff-2"></a>
## 2.获取列表/数据

> `GET` /staff/notice/fetch

- 请求参数
  `null`

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="staff-3"></a>
## 3.保存

> `POST` /staff/notice/save

- 请求参数 `json`

```json
{
  "title": "string",
  "content": "string",
  "img_url": "string",
  "tags": [],
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | ✔︎ |  |
| content | string | ✔︎ |  |
| img_url | string | ✖︎ |  |
| tags | array | ✖︎ |  |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="staff-4"></a>
## 4.更新

> `POST` /staff/notice/update

- 请求参数
  `null`

<a id="staff-5"></a>
## 5.获取列表/数据

> `GET` /staff/plan/fetch

- 请求参数
  `null`

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="staff-6"></a>
## 6.关闭

> `POST` /staff/ticket/close

- 请求参数 `json`

```json
{
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="staff-7"></a>
## 7.获取列表/数据

> `GET` /staff/ticket/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✖︎ |  |
| current | unknown | ✖︎ |  |
| pageSize | unknown | ✖︎ |  |
| status | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="staff-8"></a>
## 8.回复

> `POST` /staff/ticket/reply

- 请求参数 `json`

```json
{
  "id": "string",
  "message": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✔︎ |  |
| message | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="staff-9"></a>
## 9.封禁

> `POST` /staff/user/ban

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

<a id="staff-10"></a>
## 10.获取信息

> `GET` /staff/user/getUserInfoById

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="staff-11"></a>
## 11.发送邮件

> `POST` /staff/user/sendMail

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

<a id="staff-12"></a>
## 12.更新

> `POST` /staff/user/update

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

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
