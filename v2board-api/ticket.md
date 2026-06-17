# ticket

<a id="ticket-1"></a>
## 1.关闭

> `POST` /user/ticket/close

- 请求参数 `json`

```json
{
  "ticketId": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ticketId | unknown | ✖︎ |  |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="ticket-2"></a>
## 2.获取列表/数据

> `GET` /user/ticket/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ticketId | unknown | ✖︎ |  |
| id | unknown | ✖︎ |  |

- 成功返回示例 `json`

```json
{
  "data": []
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | array | 主返回数据体 |

<a id="ticket-3"></a>
## 3.回复

> `POST` /user/ticket/reply

- 请求参数 `json`

```json
{
  "ticketId": "string",
  "message": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ticketId | unknown | ✖︎ |  |
| message | unknown | ✔︎ |  |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="ticket-4"></a>
## 4.保存

> `POST` /user/ticket/save

- 请求参数 `json`

```json
{
  "subject": "string",
  "message": "string",
  "level": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subject | string | ✔︎ |  |
| message | string | ✔︎ |  |
| level | string | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="ticket-5"></a>
## 5.user 模块接口

> `POST` /user/ticket/withdraw

- 请求参数 `json`

```json
{
  "withdraw_method": "string",
  "withdraw_account": "string",
  "withdraw_amount": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| withdraw_method | string | ✔︎ |  |
| withdraw_account | string | ✔︎ |  |
| withdraw_amount | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
