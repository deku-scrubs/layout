/**
 * Imports
 */
import {element} from 'deku'
import {Flex} from '@deku-scrubs/style'

/**
 * defaultProps
 * @type {Object}
 */
const defaultProps = {
  layoutAlign: ''
}

/**
 * Render
 */
function render (component) {
  const {props} = component
  const {layoutAlign} = props
  const [justifyContent, alignItems] = layoutAlign.split(' ')

  return (
    <Flex flexDirection='column' justifyContent={justifyContent} alignItems={alignItems} style={props.style}>
      {props.children}
    </Flex>
  )
}

/**
 * Exports
 */
export default {render, defaultProps}
