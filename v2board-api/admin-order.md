# admin-order

<a id="admin-order-1"></a>
## 1.order 模块接口

> `POST` /{secure_path}/order/assign

- 请求参数 `json`

```json
{
  "plan_id": "string",
  "email": "string",
  "total_amount": "string",
  "period": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| plan_id | string | ✔︎ |  |
| email | string | ✔︎ |  |
| total_amount | string | ✔︎ |  |
| period | string | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-order-2"></a>
## 2.取消

> `POST` /{secure_path}/order/cancel

- 请求参数 `json`

```json
{
  "trade_no": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| trade_no | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-order-3"></a>
## 3.获取详情

> `POST` /{secure_path}/order/detail

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

<a id="admin-order-4"></a>
## 4.获取列表/数据

> `GET` /{secure_path}/order/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter.*.key | email | ✔︎ |  |
| filter.*.condition | string | ✔︎ |  |
| filter.*.value | string | ✖︎ |  |
| current | unknown | ✖︎ |  |
| pageSize | unknown | ✖︎ |  |
| is_commission | unknown | ✖︎ |  |

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

<a id="admin-order-5"></a>
## 5.order 模块接口

> `POST` /{secure_path}/order/paid

- 请求参数 `json`

```json
{
  "trade_no": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| trade_no | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-order-6"></a>
## 6.更新

> `POST` /{secure_path}/order/update

- 请求参数 `json`

```json
{
  "status": "string",
  "commission_status": "string",
  "trade_no": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| status | string | ✖︎ |  |
| commission_status | string | ✖︎ |  |
| trade_no | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
