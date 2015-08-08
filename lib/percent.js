/**
 * Return a percent string suitable for flex dimensions
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
export default percent