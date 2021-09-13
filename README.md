<div align="center">
  <a>
    <img alt="styled-components" src="https://freepikpsd.com/media/2019/10/kawaii-neko-png-Transparent-Images.png" height="150px" />
  </a>
</div>

<br />

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
