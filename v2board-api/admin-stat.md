# admin-stat

<a id="admin-stat-1"></a>
## 1.获取数据

> `GET` /{secure_path}/stat/getOrder

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

<a id="admin-stat-2"></a>
## 2.获取数据

> `GET` /{secure_path}/stat/getOverride

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "online_user": 0,
    "month_income": 0,
    "month_register_total": 6,
    "day_register_total": 4,
    "ticket_pending_total": 0,
    "commission_pending_total": 0,
    "day_income": 0,
    "last_month_income": 0,
    "commission_month_payout": 0,
    "commission_last_month_payout": 0
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| online_user | number | 字段含义需结合具体业务对象确认 |
| month_income | number | 字段含义需结合具体业务对象确认 |
| month_register_total | number | 字段含义需结合具体业务对象确认 |
| day_register_total | number | 字段含义需结合具体业务对象确认 |
| ticket_pending_total | number | 字段含义需结合具体业务对象确认 |
| commission_pending_total | number | 字段含义需结合具体业务对象确认 |
| day_income | number | 字段含义需结合具体业务对象确认 |
| last_month_income | number | 字段含义需结合具体业务对象确认 |
| commission_month_payout | number | 字段含义需结合具体业务对象确认 |
| commission_last_month_payout | number | 字段含义需结合具体业务对象确认 |

<a id="admin-stat-3"></a>
## 3.获取数据

> `GET` /{secure_path}/stat/getRanking

- 请求参数
  `null`

<a id="admin-stat-4"></a>
## 4.获取数据

> `GET` /{secure_path}/stat/getServerLastRank

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

<a id="admin-stat-5"></a>
## 5.获取数据

> `GET` /{secure_path}/stat/getServerTodayRank

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

<a id="admin-stat-6"></a>
## 6.获取数据

> `GET` /{secure_path}/stat/getStat

- 请求参数
  `null`

<a id="admin-stat-7"></a>
## 7.获取数据

> `GET` /{secure_path}/stat/getStatRecord

- 请求参数
  `null`

<a id="admin-stat-8"></a>
## 8.获取数据

> `GET` /{secure_path}/stat/getStatUser

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| user_id | integer | ✔︎ |  |
| current | unknown | ✖︎ |  |
| pageSize | unknown | ✖︎ |  |

- 成功返回示例 `json`

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "user_id": [
      "validation.required"
    ]
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| message | string |  |
| errors.user_id[0] | string |  |

<a id="admin-stat-9"></a>
## 9.获取数据

> `GET` /{secure_path}/stat/getUserLastRank

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

<a id="admin-stat-10"></a>
## 10.获取数据

> `GET` /{secure_path}/stat/getUserTodayRank

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
