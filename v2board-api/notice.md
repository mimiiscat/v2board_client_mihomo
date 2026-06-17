# notice

<a id="notice-1"></a>
## 1.获取列表/数据

> `GET` /user/notice/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | unknown | ✖︎ |  |
| current | unknown | ✖︎ |  |
| pageSize | unknown | ✖︎ |  |

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
| total | number |  |
