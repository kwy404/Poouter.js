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

```jsx
(
    Styled.new = () => {
    Supar(
        'Header',
        'header',
        `
            color: $color;
            background: $background;
        `)
    Supar(
        'Title',
        'h1',
        `
            color: orange;
        `)
    })()

    new Styler();
```

<div align="center">
  <strong>Example documentation</strong>
  <br />
  <br />
  
</div>
```jsx
 Supar(
        'Headers', //Tag Name
        'header', // Tag attribute
        `
            color: $color; // $color is attr from <Headers color='red'>
            background: ${cor} //Variable name;
            user-select: none;
        `)
```
