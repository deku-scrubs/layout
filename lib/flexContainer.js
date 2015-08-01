/**
 * Imports
 */
import {element} from 'deku'
import {Flex} from '@deku-scrubs/style'

function flexContainer (type) {
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
    const [justifyContent, alignItems] = (layoutAlign || '').split(' ')
    const newProps = {flexDirection: type}

    if (props.style) newProps.style = props.style
    if (justifyContent) newProps.justifyContent = justifyContent
    if (alignItems) newProps.alignItems = alignItems

    return element(Flex, newProps, props.children)
  }

  return {render, defaultProps}
}

/**
 * Exports
 */
export default flexContainer
