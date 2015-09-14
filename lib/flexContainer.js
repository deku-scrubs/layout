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

    if (justifyContent) style.justifyContent = translate(justifyContent)
    if (alignItems) style.alignItems = translate(alignItems)

    return element('div', {style: style}, children)
  }
}


function translate (str) {
  return str === 'start' || str === 'end'
    ? 'flex-' + str
    : str
}
