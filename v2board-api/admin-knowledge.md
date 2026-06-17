# admin-knowledge

<a id="admin-knowledge-1"></a>
## 1.删除/移除

> `POST` /{secure_path}/knowledge/drop

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

<a id="admin-knowledge-2"></a>
## 2.获取列表/数据

> `GET` /{secure_path}/knowledge/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
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

<a id="admin-knowledge-3"></a>
## 3.获取数据

> `GET` /{secure_path}/knowledge/getCategory

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

<a id="admin-knowledge-4"></a>
## 4.保存

> `POST` /{secure_path}/knowledge/save

- 请求参数 `json`

```json
{
  "category": "string",
  "language": "string",
  "title": "string",
  "body": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| category | string | ✔︎ |  |
| language | string | ✔︎ |  |
| title | string | ✔︎ |  |
| body | string | ✔︎ |  |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-knowledge-5"></a>
## 5.显示/启用

> `POST` /{secure_path}/knowledge/show

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

<a id="admin-knowledge-6"></a>
## 6.排序

> `POST` /{secure_path}/knowledge/sort

- 请求参数 `json`

```json
{
  "knowledge_ids": []
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| knowledge_ids | array | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
