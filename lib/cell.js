/**
 * Imports
 */
import {element} from 'deku'
import {Flex} from '@deku-scrubs/style'

/**
 * Exports
 */
export default {
  RowCell: {
    render (component) {
      const {props} = component
      const p = percent(props.flex)

      return (
        <Flex flex={'0 0 ' + p} maxWidth={p}>{props.children}</Flex>
      )
    }
  },
  ColumnCell: {
    render (component) {
      const {props} = component
      const p = percent(props.flex)

      return (
        <Flex flex={'0 0 ' + p} maxHeight={p}>{props.children}</Flex>
      )
    }
  }
}

/**
 * Generate a suitable percentage string
 *
 */
function percent (n) {
  n = n.toString()

  if (n === '33' || n === '34') n = '33.33'
  else if (n === '66' || n === '67') n = '66.66'

  return n + '%'
}
