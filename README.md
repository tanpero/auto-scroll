# Auto-Scroll

## Overview

Auto-Scroll is a lightweight and easy-to-use JavaScript library that provides automatic scrolling functionality for any scrollable element on your webpage. It is perfect for creating a smooth reading experience for long articles, logs, or any content that benefits from automatic scrolling.

## Installation

You can install Auto-Scroll using npm:


```bash
npm install auto-scrolling
```

Or include it directly in your HTML:


```html
<script src="path/to/auto-scrolling.js"></script>
```

## Usage

To use Auto-Scrolling, simply call the `autoScroll` function on the element you want to scroll, and pass in the delay between each scroll step in milliseconds.

Here's a basic example:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto-Scrolling Example</title>
    <style>
        #scrollable-content {
            height: 200px;
            overflow-y: auto;
            border: 1px solid #ccc;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div id="scrollable-content">
        <!-- Your scrollable content here -->
    </div>
    <script src="path/to/auto-scrolling.js"></script>
    <script>
        const scrollableElement = document.getElementById('scrollable-content');
        autoScroll(scrollableElement, 100); // Scrolls every 100 milliseconds
    </script>
</body>
</html>
```

## API

### `autoScroll(element, delay)`

- **element**: The DOM element to scroll.
- **delay**: The time in milliseconds between each scroll step.

### Methods

- **stopScroller()**: Stops the auto-scrolling. This method is attached to the element as `element.stopScroller()`.

## Example

Here's a more detailed example:

```html
<div id="scrollable-content">
    <!-- Long content goes here -->
</div>
<button id="start-scroll">Start Auto-Scroll</button>
<button id="stop-scroll">Stop Auto-Scroll</button>

<script src="path/to/auto-scrolling.js"></script>
<script>
    const scrollableElement = document.getElementById('scrollable-content');
    let scrollInterval;

    document.getElementById('start-scroll').addEventListener('click', function() {
        scrollInterval = autoScroll(scrollableElement, 100);
    });

    document.getElementById('stop-scroll').addEventListener('click', function() {
        if (scrollInterval) {
            scrollableElement.stopScroller();
        }
    });
</script>
```

## Author

Camille Dolma

## License

Auto-Scrolling is released under the MIT License. 

Copyright 2024 Camille Dolma

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

