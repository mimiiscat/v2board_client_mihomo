# invite

<a id="invite-1"></a>
## 1.获取详情

> `GET` /user/invite/details

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| current | unknown | ✖︎ |  |
| page_size | unknown | ✖︎ |  |

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

<a id="invite-2"></a>
## 2.获取列表/数据

> `GET` /user/invite/fetch

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "codes": [
      {
        "id": 4,
        "user_id": 4,
        "code": "PXAICfQO",
        "status": 0,
        "pv": 0,
        "created_at": 1774177348,
        "updated_at": 1774177348
      }
    ],
    "stat": [
      0,
      0,
      0,
      10,
      0
    ]
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| codes.id | number |  |
| codes.user_id | number |  |
| codes.code | string |  |
| codes.status | number |  |
| codes.pv | number |  |
| codes.created_at | number |  |
| codes.updated_at | number |  |
| stat[0] | number |  |

<a id="invite-3"></a>
## 3.保存

> `GET` /user/invite/save

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": true
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | boolean | 主返回数据体 |
