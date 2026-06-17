# admin-server

<a id="admin-server-1"></a>
## 1.copy 模块接口

> `POST` /{secure_path}/server/anytls/copy

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

<a id="admin-server-2"></a>
## 2.删除/移除

> `POST` /{secure_path}/server/anytls/drop

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

<a id="admin-server-3"></a>
## 3.保存

> `POST` /{secure_path}/server/anytls/save

- 请求参数 `json`

```json
{
  "name": "string",
  "group_id": [],
  "route_id": [],
  "parent_id": 1,
  "host": "string",
  "port": "string",
  "server_port": "string",
  "tags": [],
  "rate": 1,
  "server_name": "string",
  "insecure": "string",
  "padding_scheme": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | ✔︎ |  |
| group_id | array | ✔︎ |  |
| route_id | array | ✖︎ |  |
| parent_id | integer | ✖︎ |  |
| host | string | ✔︎ |  |
| port | string | ✔︎ |  |
| server_port | string | ✔︎ |  |
| tags | array | ✖︎ |  |
| rate | number | ✔︎ |  |
| server_name | string | ✖︎ |  |
| insecure | string | ✔︎ |  |
| padding_scheme | string | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-4"></a>
## 4.更新

> `POST` /{secure_path}/server/anytls/update

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

<a id="admin-server-5"></a>
## 5.删除/移除

> `POST` /{secure_path}/server/group/drop

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

<a id="admin-server-6"></a>
## 6.获取列表/数据

> `GET` /{secure_path}/server/group/fetch

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| group_id | unknown | ✖︎ |  |

- 成功返回示例 `json`

```json
{
  "data": []
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | array | 主返回数据体 |

<a id="admin-server-7"></a>
## 7.保存

> `POST` /{secure_path}/server/group/save

- 请求参数 `json`

```json
{
  "name": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | unknown | ✔︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-8"></a>
## 8.copy 模块接口

> `POST` /{secure_path}/server/hysteria/copy

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

<a id="admin-server-9"></a>
## 9.删除/移除

> `POST` /{secure_path}/server/hysteria/drop

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

<a id="admin-server-10"></a>
## 10.保存

> `POST` /{secure_path}/server/hysteria/save

- 请求参数 `json`

```json
{
  "name": "string",
  "version": "string",
  "group_id": [],
  "route_id": [],
  "parent_id": 1,
  "host": "string",
  "port": "string",
  "server_port": "string",
  "tags": [],
  "rate": 1,
  "up_mbps": 1,
  "down_mbps": 1
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | ✔︎ |  |
| version | string | ✔︎ |  |
| group_id | array | ✔︎ |  |
| route_id | array | ✖︎ |  |
| parent_id | integer | ✖︎ |  |
| host | string | ✔︎ |  |
| port | string | ✔︎ |  |
| server_port | string | ✔︎ |  |
| tags | array | ✖︎ |  |
| rate | number | ✔︎ |  |
| up_mbps | number | ✖︎ |  |
| down_mbps | number | ✖︎ |  |
| obfs | string | ✖︎ |  |
| obfs_password | string | ✖︎ |  |
| server_name | string | ✖︎ |  |
| insecure | string | ✔︎ |  |
| created_at | unknown | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-11"></a>
## 11.更新

> `POST` /{secure_path}/server/hysteria/update

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

<a id="admin-server-12"></a>
## 12.获取数据

> `GET` /{secure_path}/server/manage/getNodes

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

<a id="admin-server-13"></a>
## 13.排序

> `POST` /{secure_path}/server/manage/sort

- 请求参数
  `null`

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-14"></a>
## 14.删除/移除

> `POST` /{secure_path}/server/route/drop

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

<a id="admin-server-15"></a>
## 15.获取列表/数据

> `GET` /{secure_path}/server/route/fetch

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

<a id="admin-server-16"></a>
## 16.保存

> `POST` /{secure_path}/server/route/save

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

<a id="admin-server-17"></a>
## 17.copy 模块接口

> `POST` /{secure_path}/server/shadowsocks/copy

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

<a id="admin-server-18"></a>
## 18.删除/移除

> `POST` /{secure_path}/server/shadowsocks/drop

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

<a id="admin-server-19"></a>
## 19.保存

> `POST` /{secure_path}/server/shadowsocks/save

- 请求参数 `json`

```json
{
  "show": "string",
  "name": "string",
  "group_id": [],
  "parent_id": 1,
  "route_id": [],
  "host": "string",
  "port": "string",
  "server_port": "string",
  "cipher": "string",
  "obfs": "string",
  "obfs_settings": [],
  "tags": []
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | string | ✖︎ |  |
| name | string | ✔︎ |  |
| group_id | array | ✔︎ |  |
| parent_id | integer | ✖︎ |  |
| route_id | array | ✖︎ |  |
| host | string | ✔︎ |  |
| port | string | ✔︎ |  |
| server_port | string | ✔︎ |  |
| cipher | string | ✔︎ |  |
| obfs | string | ✖︎ |  |
| obfs_settings | array | ✖︎ |  |
| tags | array | ✖︎ |  |
| rate | number | ✔︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-20"></a>
## 20.更新

> `POST` /{secure_path}/server/shadowsocks/update

- 请求参数 `json`

```json
{
  "show": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | string | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-21"></a>
## 21.copy 模块接口

> `POST` /{secure_path}/server/trojan/copy

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

<a id="admin-server-22"></a>
## 22.删除/移除

> `POST` /{secure_path}/server/trojan/drop

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

<a id="admin-server-23"></a>
## 23.保存

> `POST` /{secure_path}/server/trojan/save

- 请求参数 `json`

```json
{
  "show": "string",
  "name": "string",
  "group_id": [],
  "route_id": [],
  "parent_id": 1,
  "host": "string",
  "port": "string",
  "server_port": "string",
  "network": "string",
  "network_settings": "string",
  "allow_insecure": "string",
  "server_name": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | string | ✖︎ |  |
| name | string | ✔︎ |  |
| group_id | array | ✔︎ |  |
| route_id | array | ✖︎ |  |
| parent_id | integer | ✖︎ |  |
| host | string | ✔︎ |  |
| port | string | ✔︎ |  |
| server_port | string | ✔︎ |  |
| network | string | ✔︎ |  |
| network_settings | string | ✖︎ |  |
| allow_insecure | string | ✖︎ |  |
| server_name | string | ✖︎ |  |
| tags | array | ✖︎ |  |
| rate | number | ✔︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-24"></a>
## 24.更新

> `POST` /{secure_path}/server/trojan/update

- 请求参数 `json`

```json
{
  "show": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | string | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-25"></a>
## 25.copy 模块接口

> `POST` /{secure_path}/server/tuic/copy

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

<a id="admin-server-26"></a>
## 26.删除/移除

> `POST` /{secure_path}/server/tuic/drop

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

<a id="admin-server-27"></a>
## 27.保存

> `POST` /{secure_path}/server/tuic/save

- 请求参数 `json`

```json
{
  "name": "string",
  "group_id": [],
  "route_id": [],
  "parent_id": 1,
  "host": "string",
  "port": "string",
  "server_port": "string",
  "tags": [],
  "rate": 1,
  "server_name": "string",
  "insecure": "string",
  "disable_sni": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | ✔︎ |  |
| group_id | array | ✔︎ |  |
| route_id | array | ✖︎ |  |
| parent_id | integer | ✖︎ |  |
| host | string | ✔︎ |  |
| port | string | ✔︎ |  |
| server_port | string | ✔︎ |  |
| tags | array | ✖︎ |  |
| rate | number | ✔︎ |  |
| server_name | string | ✖︎ |  |
| insecure | string | ✔︎ |  |
| disable_sni | string | ✔︎ |  |
| udp_relay_mode | string | ✖︎ |  |
| zero_rtt_handshake | string | ✔︎ |  |
| congestion_control | string | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-28"></a>
## 28.更新

> `POST` /{secure_path}/server/tuic/update

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

<a id="admin-server-29"></a>
## 29.copy 模块接口

> `POST` /{secure_path}/server/v2node/copy

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

<a id="admin-server-30"></a>
## 30.删除/移除

> `POST` /{secure_path}/server/v2node/drop

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

<a id="admin-server-31"></a>
## 31.保存

> `POST` /{secure_path}/server/v2node/save

- 请求参数 `json`

```json
{
  "group_id": "string",
  "route_id": [],
  "name": "string",
  "parent_id": 1,
  "host": "string",
  "listen_ip": "string",
  "port": "string",
  "server_port": "string",
  "protocol": "string",
  "tls": "string",
  "tls_settings": [],
  "flow": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| group_id | string | ✔︎ |  |
| route_id | array | ✖︎ |  |
| name | string | ✔︎ |  |
| parent_id | integer | ✖︎ |  |
| host | string | ✔︎ |  |
| listen_ip | string | ✖︎ |  |
| port | string | ✔︎ |  |
| server_port | string | ✔︎ |  |
| protocol | string | ✔︎ |  |
| tls | string | ✔︎ |  |
| tls_settings | array | ✖︎ |  |
| flow | string | ✖︎ |  |
| network | string | ✔︎ |  |
| network_settings | array | ✖︎ |  |
| encryption | string | ✖︎ |  |
| encryption_settings | array | ✖︎ |  |
| disable_sni | string | ✔︎ |  |
| udp_relay_mode | string | ✖︎ |  |
| zero_rtt_handshake | string | ✔︎ |  |
| congestion_control | string | ✖︎ |  |
| cipher | string | ✖︎ |  |
| up_mbps | number | ✖︎ |  |
| down_mbps | number | ✖︎ |  |
| obfs | string | ✖︎ |  |
| obfs_password | string | ✖︎ |  |
| padding_scheme | string | ✖︎ |  |
| tags | array | ✖︎ |  |
| rate | string | ✔︎ |  |
| show | string | ✖︎ |  |
| sort | string | ✖︎ |  |
| created_at | unknown | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-32"></a>
## 32.更新

> `POST` /{secure_path}/server/v2node/update

- 请求参数 `json`

```json
{
  "show": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | string | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-33"></a>
## 33.copy 模块接口

> `POST` /{secure_path}/server/vless/copy

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

<a id="admin-server-34"></a>
## 34.删除/移除

> `POST` /{secure_path}/server/vless/drop

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

<a id="admin-server-35"></a>
## 35.保存

> `POST` /{secure_path}/server/vless/save

- 请求参数 `json`

```json
{
  "group_id": "string",
  "route_id": [],
  "name": "string",
  "parent_id": 1,
  "host": "string",
  "port": "string",
  "server_port": "string",
  "tls": "string",
  "tls_settings": [],
  "flow": "string",
  "network": "string",
  "network_settings": []
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| group_id | string | ✔︎ |  |
| route_id | array | ✖︎ |  |
| name | string | ✔︎ |  |
| parent_id | integer | ✖︎ |  |
| host | string | ✔︎ |  |
| port | string | ✔︎ |  |
| server_port | string | ✔︎ |  |
| tls | string | ✔︎ |  |
| tls_settings | array | ✖︎ |  |
| flow | string | ✖︎ |  |
| network | string | ✔︎ |  |
| network_settings | array | ✖︎ |  |
| encryption | string | ✖︎ |  |
| encryption_settings | array | ✖︎ |  |
| tags | array | ✖︎ |  |
| rate | string | ✔︎ |  |
| show | string | ✖︎ |  |
| sort | string | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-36"></a>
## 36.更新

> `POST` /{secure_path}/server/vless/update

- 请求参数 `json`

```json
{
  "show": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | string | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-37"></a>
## 37.copy 模块接口

> `POST` /{secure_path}/server/vmess/copy

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

<a id="admin-server-38"></a>
## 38.删除/移除

> `POST` /{secure_path}/server/vmess/drop

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

<a id="admin-server-39"></a>
## 39.保存

> `POST` /{secure_path}/server/vmess/save

- 请求参数 `json`

```json
{
  "show": "string",
  "name": "string",
  "group_id": [],
  "route_id": [],
  "parent_id": 1,
  "host": "string",
  "port": "string",
  "server_port": "string",
  "tls": "string",
  "tags": [],
  "rate": 1,
  "network": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | string | ✖︎ |  |
| name | string | ✔︎ |  |
| group_id | array | ✔︎ |  |
| route_id | array | ✖︎ |  |
| parent_id | integer | ✖︎ |  |
| host | string | ✔︎ |  |
| port | string | ✔︎ |  |
| server_port | string | ✔︎ |  |
| tls | string | ✔︎ |  |
| tags | array | ✖︎ |  |
| rate | number | ✔︎ |  |
| network | string | ✔︎ |  |
| networkSettings | array | ✖︎ |  |
| networkSettings.security | string | ✖︎ |  |
| ruleSettings | array | ✖︎ |  |
| tlsSettings | array | ✖︎ |  |
| dnsSettings | array | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |

<a id="admin-server-40"></a>
## 40.更新

> `POST` /{secure_path}/server/vmess/update

- 请求参数 `json`

```json
{
  "show": "string",
  "id": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | string | ✖︎ |  |
| id | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
