# admin-giftcard

<a id="admin-giftcard-1"></a>
## 1.删除/移除

> `POST` /{secure_path}/giftcard/drop

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

<a id="admin-giftcard-2"></a>
## 2.获取列表/数据

> `GET` /{secure_path}/giftcard/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| current | unknown | ✖︎ |  |
| pageSize | unknown | ✖︎ |  |
| sort_type | unknown | ✖︎ |  |
| sort | unknown | ✖︎ |  |

- 成功返回示例 `json`

```json
{
  "data": [],
  "total": 0
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | array | 主返回数据体 |
| total | number | 总数 |

<a id="admin-giftcard-3"></a>
## 3.生成

> `POST` /{secure_path}/giftcard/generate

- 请求参数 `json`

```json
{
  "generate_count": 1,
  "name": "string",
  "type": "string",
  "value": "string",
  "plan_id": "string",
  "started_at": 1,
  "ended_at": 1,
  "limit_use": 1,
  "code": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| generate_count | integer | ✖︎ |  |
| name | string | ✔︎ |  |
| type | string | ✔︎ |  |
| value | string | ✖︎ |  |
| plan_id | string | ✖︎ |  |
| started_at | integer | ✔︎ |  |
| ended_at | integer | ✔︎ |  |
| limit_use | integer | ✖︎ |  |
| code | string | ✖︎ |  |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
