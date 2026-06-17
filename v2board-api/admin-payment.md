# admin-payment

<a id="admin-payment-1"></a>
## 1.删除/移除

> `POST` /{secure_path}/payment/drop

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

<a id="admin-payment-2"></a>
## 2.获取列表/数据

> `GET` /{secure_path}/payment/fetch

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

<a id="admin-payment-3"></a>
## 3.获取数据

> `POST` /{secure_path}/payment/getPaymentForm

- 请求参数 `json`

```json
{
  "payment": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| payment | unknown | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-payment-4"></a>
## 4.获取数据

> `GET` /{secure_path}/payment/getPaymentMethods

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": [
    "AlipayF2F",
    "BEasyPaymentUSDT",
    "BTCPay",
    "CoinPayments",
    "Coinbase",
    "EPay",
    "MGate",
    "StripeALL",
    "StripeAlipay",
    "StripeCheckout",
    "StripeCredit",
    "StripeWepay",
    "WechatPayNative"
  ]
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data[0] | string |  |

<a id="admin-payment-5"></a>
## 5.保存

> `POST` /{secure_path}/payment/save

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

<a id="admin-payment-6"></a>
## 6.显示/启用

> `POST` /{secure_path}/payment/show

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

<a id="admin-payment-7"></a>
## 7.排序

> `POST` /{secure_path}/payment/sort

- 请求参数 `json`

```json
{
  "ids": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ids | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
