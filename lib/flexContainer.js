/**
 * Imports
 */
import element from 'magic-virtual-element'
import assign from 'object-assign'

/**
 * Flex container factory
 */
export default function (type) {
  /**
   * Render
   */
  return function ({props: {layoutAlign='', style={}, children}}) {
    const [justifyContent, alignItems] = layoutAlign.split(' ')

    style = assign({flexDirection: type, display: 'flex'}, style)

    if (justifyContent) style.justifyContent = justifyContent
    if (alignItems) style.alignItems = alignItems

    return element('div', {style: style}, children)
  }
}