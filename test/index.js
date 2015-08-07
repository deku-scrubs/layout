/**
 * Imports
 */
import assert from 'assert'
import {tree, render} from 'deku'
import element from 'magic-virtual-element'
import {Row, RowCell} from '..'

/**
 * Tests
 */
let container
describe('layout', function () {
  beforeEach(function () {
    empty(document.body)
    container = document.body.appendChild(document.createElement('div'))
  })

  it('should work', function () {
    create(<Row layoutAlign='space-around center'><RowCell flex='33'>test</RowCell></Row>)
    const row = container.children[0]
    const cell = row.children[0]

    const rowStyle = row.attributes.style.value
    const cellStyle = cell.attributes.style.value

    assert.ok(rowStyle.indexOf('flex-direction:row') !== -1)
    assert.ok(rowStyle.indexOf('justify-content:space-around') !== -1)
    assert.ok(rowStyle.indexOf('align-items:center') !== -1)

    assert.ok(cellStyle.indexOf('max-width:33.33%') !== -1)
    assert.ok(cellStyle.indexOf('flex:0 0 33.33%') !== -1)
  })

  it('should not put undefind when a prop isnt specified', function () {
    create(<Row layoutAlign='space-around'><RowCell flex='33'>test</RowCell></Row>)
    const row = container.children[0]
    const rowStyle = row.attributes.style.value

    assert.ok(rowStyle.indexOf('align-items') === -1)
  })

  it('should not throw an error when layoutAlign is not specified', function () {
    assert.doesNotThrow(function () {
      create(<Row />)
    })
  })
})

function create (component) {
  render(tree(component), container)
}

function empty (node) {
  while (node.lastChild) {
    node.removeChild(node.firstChild)
  }
}
