# BEKK-theme til [remark](https://github.com/gnab/remark)


For å inkludere BEKK-themet:


```bash
npm install bekk/remark
```


```html
<link href="node_modules/remark-bekk/dist/bekk.css" type="text/css" rel="stylesheet">
<script src="node_modules/remark-bekk/vendor/remark.min.js" type="text/javascript"></script>
<script type="text/javascript">
  var slideshow = remark.create({
    ratio: '16:9',
    highlightStyle: 'monokai'
  });
</script>
```

Sjekk ut [example](http://bekk.github.io/remark/example/) for mer info
