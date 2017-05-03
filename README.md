# chtml
chtml,中国人自己的超文本标记语言


## 安装

```
npm install chtml
```

## 使用

```
import chtml from 'chtml'
chtml.compileFromString('《块级样式》{{文字}}《块级样式》', {
  "文字": "你好，世界"
})
```

## 接口
### compileFromString(str, data?)

### compileFromFile(path, data?)

