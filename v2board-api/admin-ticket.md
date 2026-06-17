# admin-ticket

<a id="admin-ticket-1"></a>
## 1.关闭

> `POST` /{secure_path}/ticket/close

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

<a id="admin-ticket-2"></a>
## 2.获取列表/数据

> `GET` /{secure_path}/ticket/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✖︎ |  |
| current | unknown | ✖︎ |  |
| pageSize | unknown | ✖︎ |  |
| status | unknown | ✖︎ |  |
| reply_status | unknown | ✖︎ |  |
| email | unknown | ✖︎ |  |

- 成功返回示例 `json`

```json
{
  "data": [
    {
      "id": 1,
      "user_id": 2,
      "subject": "hello",
      "level": 1,
      "status": 1,
      "reply_status": 0,
      "created_at": 1773829891,
      "updated_at": 1773841391
    }
  ],
  "total": 1
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| id | number |  |
| user_id | number |  |
| subject | string |  |
| level | number |  |
| status | number |  |
| reply_status | number |  |
| created_at | number |  |
| updated_at | number |  |
| total | number |  |

<a id="admin-ticket-3"></a>
## 3.回复

> `POST` /{secure_path}/ticket/reply

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
