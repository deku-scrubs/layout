/**
 * Imports
 */
import flexContainer from './flexContainer'
import cell from './cell'

/**
 * Vars
 */
const Row = flexContainer('row')
const Column = flexContainer('column')
const RowCell = cell('row')
const ColumnCell = cell('column')

/**
 * Exports
 */
export default {Row, Column, RowCell, ColumnCell}
