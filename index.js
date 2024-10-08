/* Copyright 2024 Camille Dolma
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const autoScroll = (() => {

function getLineHeight(element) {
    const style = window.getComputedStyle(element)
    let lineHeight = style.getPropertyValue('line-height')
    let fontSize = parseInt(style.getPropertyValue('font-size'), 10)

    if (!isNaN(lineHeight) && lineHeight !== 'normal') {
        if (lineHeight.endsWith('px')) {
                lineHeight = parseInt(lineHeight, 10)
        } else if (lineHeight.endsWith('em')) {
                lineHeight = fontSize * parseFloat(lineHeight)
        } else if (lineHeight.endsWith('rem')) {
                lineHeight = parseFloat(lineHeight) * parseFloat(getComputedStyle(document.documentElement).fontSize)
        } else {
                lineHeight = fontSize * parseFloat(lineHeight)
        }
    } else {
        lineHeight = fontSize * 1.2
    }

    return lineHeight
}

function findFirstVisibleChild(element) {
    let children = element.children
    for (let child of children) {
            if (child.offsetTop + child.offsetHeight > element.scrollTop
                        && child.offsetTop < element.scrollTop + element.clientHeight) {
                    return child
            }
    }
    return null
}

function scroller(element, delay) {
    let autoScroll = element
    let iScrollHeight = autoScroll.scrollHeight
    let iScrollTop = autoScroll.scrollTop
    let iHeight = autoScroll.clientHeight
    let timerId = setInterval(() => {
        let firstVisibleChild = findFirstVisibleChild(autoScroll)
        if (firstVisibleChild) {
            let lineHeight = getLineHeight(firstVisibleChild)
            if (iScrollTop + iHeight < iScrollHeight) {
                iScrollTop += lineHeight
                autoScroll.scrollTo(0, iScrollTop)
            } else {
                iScrollTop = 0
                autoScroll.scrollTo(0, iScrollTop)
            }
        } else {
            clearInterval(timerId)
        }
    }, delay)
    autoScroll.stopScroller = () => {
        clearInterval(timerId)
    }
}

return scroller

})()

