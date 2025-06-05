# React Twinkle Text
React twinkle text effect using Tailwind-compatible styles.

## Example
Here is an example of the Twinkle Text in one of my projects:<br/><br/>
<a class="link" href="https://github.com/itznao/react-twinkle-text/blob/master/example.gif">
    <img class="image" src="example.gif" alt=" ">
</a>

## Installation

```bash
npm install react-twinkle-text
```

## Usage
### Normal Twinkle Text
```jsx
import { TwinkleText } from 'react-twinkle-text';

<TwinkleText className="text-gray-500">Hello World</TwinkleText>
```

### Hover Twinkle Text
```jsx
import { TwinkleText } from 'react-twinkle-text';

<TwinkleText hover className="text-gray-500">Hello World</TwinkleText>
```

### Group Hover Twinkle Text
```jsx
import { TwinkleText } from 'react-twinkle-text';

<div className="group">
    <TwinkleText groupHover className="text-gray-500">Hello World</TwinkleText>
</div>
```
