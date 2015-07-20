/**
 * Imports
 */
import {element} from 'deku'
import {Flex} from '@deku-scrubs/style'

/**
 * Vars
 */
const cssProp = {
  row: 'maxWidth',
  column: 'maxHeight'
}

/**
 * cell factory
 */

function cell (type) {
  function render (component) {
    const {props} = component
    const newProps = {}

    if (props.flex) {
      const p = percent(props.flex)
      newProps.flex = '0 0 ' + p
      newProps[cssProp[type]] = p
    }

    return element(Flex, newProps, props.children)
  }

  return {render}
}

/**
 * Generate a suitable percentage string
 */
function percent (n) {
  n = n.toString()

  if (n === '33' || n === '34') n = '33.33'
  else if (n === '66' || n === '67') n = '66.66'

  return n + '%'
}

/**
 * Exports
 */
export default cell
