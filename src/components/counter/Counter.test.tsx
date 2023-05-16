import { render, screen } from '@testing-library/react'
import Counter from './Counter'
import user from '@testing-library/user-event'

describe('Counters', () => {
  test('render correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()
    const IncButton = screen.getByRole('button', { name: 'Inc' })
    expect(IncButton).toBeInTheDocument()
  })

  test('count is 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('after click inc button', async () => {
    render(<Counter />)
    user.setup()
    const IncButton = screen.getByRole('button', { name: 'Inc' })
    await user.click(IncButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  test('render 10 after click set', async () => {
    render(<Counter />)
    user.setup()
    const amountInputElement = screen.getByRole('spinbutton')
    await user.type(amountInputElement, '10')
    expect(amountInputElement).toHaveValue(10)

    const SetButton = screen.getByRole('button', { name: 'set' })
    await user.click(SetButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })
  test('render Tab correctly', async () => {
    render(<Counter />)
    user.setup()
    const amountInputElement = screen.getByRole('spinbutton')
    const SetButton = screen.getByRole('button', { name: 'set' })
    const IncButton = screen.getByRole('button', { name: 'Inc' })
    await user.tab()
    expect(IncButton).toHaveFocus()
    await user.tab()
    expect(amountInputElement).toHaveFocus()
    await user.tab()
    expect(SetButton).toHaveFocus()
  })
})
