# admin-system

<a id="admin-system-1"></a>
## 1.获取数据

> `GET` /{secure_path}/system/getQueueMasters

- 请求参数
  `null`

- 成功返回示例 `json`

```json
[]
```

<a id="admin-system-2"></a>
## 2.获取数据

> `GET` /{secure_path}/system/getQueueStats

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "failedJobs": 0,
    "jobsPerMinute": 0,
    "pausedMasters": 0,
    "periods": {
      "failedJobs": 10080,
      "recentJobs": 60
    },
    "processes": 0,
    "queueWithMaxRuntime": null,
    "queueWithMaxThroughput": null,
    "recentJobs": 0,
    "status": false,
    "wait": []
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| failedJobs | number | 字段含义需结合具体业务对象确认 |
| jobsPerMinute | number | 字段含义需结合具体业务对象确认 |
| pausedMasters | number | 字段含义需结合具体业务对象确认 |
| periods.failedJobs | number | 字段含义需结合具体业务对象确认 |
| periods.recentJobs | number | 字段含义需结合具体业务对象确认 |
| processes | number | 字段含义需结合具体业务对象确认 |
| queueWithMaxRuntime | null | 字段含义需结合具体业务对象确认 |
| queueWithMaxThroughput | null | 字段含义需结合具体业务对象确认 |
| recentJobs | number | 字段含义需结合具体业务对象确认 |
| status | boolean | 状态值 |
| wait | array | 字段含义需结合具体业务对象确认 |

<a id="admin-system-3"></a>
## 3.获取数据

> `GET` /{secure_path}/system/getQueueWorkload

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

<a id="admin-system-4"></a>
## 4.获取数据

> `GET` /{secure_path}/system/getSystemLog

- 请求参数 `query`

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| current | unknown | ✖︎ |  |
| page_size | unknown | ✖︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
| total | unknown | 总数 |

<a id="admin-system-5"></a>
## 5.获取数据

> `GET` /{secure_path}/system/getSystemStatus

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "schedule": false,
    "horizon": false,
    "schedule_last_runtime": "1773904210"
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| schedule | boolean | 字段含义需结合具体业务对象确认 |
| horizon | boolean | 字段含义需结合具体业务对象确认 |
| schedule_last_runtime | string | 字段含义需结合具体业务对象确认 |
