# chtml
chtml,中国人自己的超文本标记语言


## 安装

```
npm install chtml
```

## 使用

### shell

```
chtml input.chtml -o -w output.html
```

### node
```javascript
import chtml from 'chtml'
chtml.compile(`
 《块级样式》你好，{{文字}}《/块级样式》
`)({
  "文字": "世界"
})

// output
<div>你好，世界</div>
```

## 接口
### compile(str, options?)

### compileFromFile(path, options?)

