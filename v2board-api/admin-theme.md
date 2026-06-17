# admin-theme

<a id="admin-theme-1"></a>
## 1.获取配置

> `POST` /{secure_path}/theme/getThemeConfig

- 请求参数 `json`

```json
{
  "name": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | ✔︎ |  |

- 成功返回示例 `json`

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "name": [
      "validation.required"
    ]
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| message | string |  |
| errors.name[0] | string |  |

<a id="admin-theme-2"></a>
## 2.获取数据

> `GET` /{secure_path}/theme/getThemes

- 请求参数
  `null`

- 成功返回示例 `json`

```json
{
  "data": {
    "themes": {
      "default": {
        "name": "default",
        "description": "默认主题",
        "version": "1.7.5",
        "images": "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2160&q=80",
        "configs": [
          {
            "label": "主题色",
            "placeholder": "请选择主题颜色",
            "field_name": "theme_color",
            "field_type": "select",
            "select_options": {
              "default": "默认(蓝色)",
              "green": "奶绿色",
              "black": "黑色",
              "darkblue": "暗蓝色"
            },
            "default_value": "default"
          },
          {
            "label": "背景",
            "placeholder": "请输入背景图片URL",
            "field_name": "background_url",
            "field_type": "input"
          },
          {
            "label": "边栏风格",
            "placeholder": "请选择边栏风格",
            "field_name": "theme_sidebar",
            "field_type": "select",
            "select_options": {
              "light": "亮",
              "dark": "暗"
            },
            "default_value": "light"
          },
          {
            "label": "顶部风格",
            "placeholder": "请选择顶部风格",
            "field_name": "theme_header",
            "field_type": "select",
            "select_options": {
              "light": "亮",
              "dark": "暗"
            },
            "default_value": "dark"
          },
          {
            "label": "自定义页脚HTML",
            "placeholder": "可以实现客服JS代码的加入等",
            "field_name": "custom_html",
            "field_type": "textarea"
          }
        ]
      }
    },
    "active": "v2board"
  }
}
```

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| themes.default.name | string |  |
| themes.default.description | string |  |
| themes.default.version | string |  |
| themes.default.images | string |  |
| themes.default.configs.label | string |  |
| themes.default.configs.placeholder | string |  |
| themes.default.configs.field_name | string |  |
| themes.default.configs.field_type | string |  |
| themes.default.configs.select_options.default | string |  |
| themes.default.configs.select_options.green | string |  |
| themes.default.configs.select_options.black | string |  |
| themes.default.configs.select_options.darkblue | string |  |
| themes.default.configs.default_value | string |  |
| active | string | 字段含义需结合具体业务对象确认 |

<a id="admin-theme-3"></a>
## 3.获取配置

> `POST` /{secure_path}/theme/saveThemeConfig

- 请求参数 `json`

```json
{
  "name": "string",
  "config": "string"
}
```

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | ✔︎ |  |
| config | string | ✔︎ |  |

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| data | unknown | 主返回数据体 |
