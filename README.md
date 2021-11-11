<div align="center">
  <strong>Visual primitives for the component age. Using Vanilla JS 💅</strong>
  <br />
  <br />
  
</div>

<div align="center">
  <strong>Example documentation</strong>
  <br />
  <br />
  
</div>


```jsx
(
    Styled.new = () => {
    const cor = 'red'
    Style(
        'Headers',
        'header',
        `
            color: $color;
            background: ${cor};
            user-select: none;
            :hover{
                color: ${cor};
            }
            :active{
                background: green;
            }
            :after{
                content: '';
                width: 100px;
                height: 100px;
                background: green;
                position: absolute;
            }
        `)
    }
    )()

    new Styler();
```
