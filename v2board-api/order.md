# order

<a id="order-1"></a>
## 1.取消

> `POST` /user/order/cancel

- 请求参数 `json`

```json
{
  "tradeNo": "string",
  "trade_no": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tradeNo | unknown | ✖︎ |  |
| trade_no | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="order-2"></a>
## 2.检查/校验

> `GET` /user/order/check

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tradeNo | unknown | ✖︎ |  |
| trade_no | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="order-3"></a>
## 3.检查/校验

> `POST` /user/order/checkout

- 请求参数 `json`

```json
{
  "tradeNo": "string",
  "method": "string",
  "trade_no": "string",
  "token": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tradeNo | unknown | ✖︎ |  |
| method | unknown | ✖︎ |  |
| trade_no | unknown | ✖︎ |  |
| token | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
| type | unknown | 返回类型/支付类型/节点类型（视接口而定） |

<a id="order-4"></a>
## 4.获取详情

> `GET` /user/order/detail

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tradeNo | unknown | ✖︎ |  |
| trade_no | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="order-5"></a>
## 5.获取列表/数据

> `GET` /user/order/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| status | unknown | ✖︎ |  |

- 成功返回示例 `json`

```json
{
  "data": []
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | array | 主返回数据体 |

<a id="order-6"></a>
## 6.获取数据

> `GET` /user/order/getPaymentMethod

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

<a id="order-7"></a>
## 7.保存

> `POST` /user/order/save

- 请求参数 `json`

```json
{
  "planId": "string",
  "period": "string",
  "plan_id": "string",
  "deposit_amount": "string",
  "coupon_code": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| planId | unknown | ✖︎ |  |
| period | string | ✔︎ |  |
| plan_id | string | ✔︎ |  |
| deposit_amount | unknown | ✖︎ |  |
| coupon_code | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
