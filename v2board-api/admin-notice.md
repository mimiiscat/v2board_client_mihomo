# admin-notice

<a id="admin-notice-1"></a>
## 1.删除/移除

> `POST` /{secure_path}/notice/drop

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

<a id="admin-notice-2"></a>
## 2.获取列表/数据

> `GET` /{secure_path}/notice/fetch

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

<a id="admin-notice-3"></a>
## 3.保存

> `POST` /{secure_path}/notice/save

- 请求参数 `json`

```json
{
  "title": "string",
  "content": "string",
  "img_url": "string",
  "tags": [],
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | ✔︎ |  |
| content | string | ✔︎ |  |
| img_url | string | ✖︎ |  |
| tags | array | ✖︎ |  |
| id | unknown | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-notice-4"></a>
## 4.显示/启用

> `POST` /{secure_path}/notice/show

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

<a id="admin-notice-5"></a>
## 5.更新

> `POST` /{secure_path}/notice/update

- 请求参数
  `null`
