# <div> vs <span> 

### <div> behaves (Block-level)
```html
<div style="background-color: lightblue;">First Box</div>
<div style="background-color: lightcoral;">Second Box</div>
```
#### Result
```text
[ First Box (stretches across the full screen width) ]
[ Second Box (stretches across the full screen width) ]
```


### <span> behaves (Inline)
```html
<p>This is a sentence where only <span style="color: blue; font-weight: bold;">these specific words</span> are styled inline.</p>
```
#### Result
```text
This is a sentence where only these specific words are styled inline.
```

