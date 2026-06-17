# admin-plan

<a id="admin-plan-1"></a>
## 1.删除/移除

> `POST` /{secure_path}/plan/drop

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

<a id="admin-plan-2"></a>
## 2.获取列表/数据

> `GET` /{secure_path}/plan/fetch

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

<a id="admin-plan-3"></a>
## 3.保存

> `POST` /{secure_path}/plan/save

- 请求参数 `json`

```json
{
  "name": "string",
  "content": "string",
  "group_id": "string",
  "transfer_enable": "string",
  "device_limit": 1,
  "month_price": 1,
  "quarter_price": 1,
  "half_year_price": 1,
  "year_price": 1,
  "two_year_price": 1,
  "three_year_price": 1,
  "onetime_price": 1
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | ✔︎ |  |
| content | string | ✖︎ |  |
| group_id | string | ✔︎ |  |
| transfer_enable | string | ✔︎ |  |
| device_limit | integer | ✖︎ |  |
| month_price | integer | ✖︎ |  |
| quarter_price | integer | ✖︎ |  |
| half_year_price | integer | ✖︎ |  |
| year_price | integer | ✖︎ |  |
| two_year_price | integer | ✖︎ |  |
| three_year_price | integer | ✖︎ |  |
| onetime_price | integer | ✖︎ |  |
| reset_price | integer | ✖︎ |  |
| reset_traffic_method | integer | ✖︎ |  |
| capacity_limit | integer | ✖︎ |  |
| speed_limit | integer | ✖︎ |  |
| id | unknown | ✖︎ |  |
| force_update | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-plan-4"></a>
## 4.排序

> `POST` /{secure_path}/plan/sort

- 请求参数 `json`

```json
{
  "plan_ids": []
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| plan_ids | array | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-plan-5"></a>
## 5.更新

> `POST` /{secure_path}/plan/update

- 请求参数 `json`

```json
{
  "show": "string",
  "renew": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | string | ✖︎ |  |
| renew | string | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
