/**
 * Imports
 */
import element from 'magic-virtual-element'
import percent from './percent'

/**
 * Vars
 */
const cssProp = {
  row: 'maxWidth',
  column: 'maxHeight'
}

/**
 * Cell factory
 */
export default function (type) {
  return function ({props}) {
    const style = {display: 'flex'}

    if (props.flex) {
      const p = percent(props.flex)
      style.flex = '0 0 ' + p
      style[cssProp[type]] = p
    }

    return element('div', {style}, props.children)
  }
}
