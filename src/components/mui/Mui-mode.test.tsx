import { render, screen } from '../../test-utils'
import { MuiMode } from './MuiMode'

describe('mui-mode', () => {
  test('render corrctly', () => {
    render(<MuiMode />)
    const HeadingElement = screen.getByRole('heading')
    expect(HeadingElement).toHaveTextContent('dark mode')
  })
})
