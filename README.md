<h3 align="center">
  React Native Dashed Line
</h3>

<p align="center">
  A dependency free React Native component to render dashed/dotted lines
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-dashed-line">
    <img src="https://img.shields.io/npm/v/react-native-dashed-line?style=flat-square" alt="Current npm package version." />
  </a>
  <a href="https://www.npmjs.com/package/react-native-dashed-line">
    <img src="https://img.shields.io/bundlephobia/min/react-native-dashed-line?style=flat-square" alt="Bundle size" />
  </a>
  <a href="https://github.com/RBrNx/react-native-dashed-line/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-native-dashed-line?style=flat-square" alt="react-native-dashed-line is released under the MIT license." />
  </a>
</p>

<hr />

<br />

## Contents

- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [API Reference](#api-reference)
- [Contributing](#contributing)

<br />

## Installation

You can install via Yarn or npm

```bash
yarn add react-native-dashed-line
```

```bash
npm install react-native-dashed-line
```

<br />

## Usage Guide

Just need to import it, easy peasy!

```javascript
import DashedLine from 'react-native-dashed-line';

return (
  <View style={{ padding: '5%', height: '100%' }}>
    <DashedLine dashLength={5} />

    <DashedLine dashLength={10} dashThickness={8} />

    <DashedLine dashLength={10} dashThickness={8} dashGap={5} />

    <DashedLine dashLength={10} dashThickness={8} dashGap={5} dashColor='#c32626' />

    <DashedLine dashLength={10} dashThickness={8} dashGap={5} dashColor='#c32626' dashStyle={{ borderRadius: 5 }} />

    <DashedLine axis='vertical' dashLength={5} />
  </View>
);
```

<img height="750" src="https://user-images.githubusercontent.com/1332314/116053526-b2223180-a672-11eb-935e-57d3925cf34e.png" alt="Example screenshot">

<br/>

## API Reference

Here is a list of all of the props that react-native-dashed-line can accept

### `axis`

Axis of the line, can be either `horizontal` or `vertical`. Defaults to `horionztal`.

| type   | default    | required |
| ------ | ---------- | -------- |
| string | horizontal | NO       |

### `dashGap`

Length of the gap in pixels between each dash, defaults to `2`.

| type   | default | required |
| ------ | ------- | -------- |
| number | 2       | NO       |

### `dashLength`

Length of each dash stroke in pixels, defaults to `4`.

| type   | default | required |
| ------ | ------- | -------- |
| number | 4       | NO       |

### `dashThickness`

Defines the thickness of each dash stroke in pixels, defaults to `2`.

| type   | default | required |
| ------ | ------- | -------- |
| number | 2       | NO       |

### `dashColor`

Defines the color of the dashed line, defaults to Black `#000`. Any valid React Native colour can be provided.

| type   | default | required |
| ------ | ------- | -------- |
| string | #000    | NO       |

### `dashStyle`

Allows for custom View styles to be passed to each dash.

| type            | required |
| --------------- | -------- |
| Object \| Array | NO       |

### `style`

Allows for custom View styles to be passed to each dashed line container.

| type            | required |
| --------------- | -------- |
| Object \| Array | NO       |

<br/>

## Contributing

I am more than happy to accept any contributions anyone would like to make, whether that's raising an issue, suggesting an improvement or developing a new feature.
