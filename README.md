Simple react tooltip componen
========================================

[![License](https://img.shields.io/github/license/renofi/react-tooltip)](https://github.com/RenoFi/react-tooltip/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/rc-simple-tooltip)](https://www.npmjs.com/package/rc-simple-tooltip)
[![Build Status](https://travis-ci.org/RenoFi/react-tooltip.svg?branch=master)](https://travis-ci.org/RenoFi/react-tooltip)


## Installation

Install package with npm:

```
npm i rc-simple-tooltip
```

Install package with yarn:

```
yarn add rc-simple-tooltip
```


## Basic Usage

Import `Tooltip` component:

```js
import Tooltip from 'rc-simple-tooltip';
```

Wrap your component with `Tooltip`:

```js
<Tooltip trigger="hover" content="Tooltip content">
  <button>Complete action</button>
</Tooltip>
```

Additionally import `styles.css` to apply default styling:

```js
import 'rc-simple-tooltip/dist/styles.css';
```

## Props

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**`active`**|`{Boolean}`|`null`|Show tooltip|
|**`content`**|`{Node}`|`null`|Tooltip content|
|**`position`**|`{'left'\|'right'\|'top'\|'bottom'}`|`null`|Tooltip position|
|**`trigger`**|`{'click'\|'focus'\|'hover'}`|`null`|Tooltip activation trigger|
|**`className`**|`{String}`|`null`|className value|
|**`styles`**|`{Object}`|`null`|styles value|
