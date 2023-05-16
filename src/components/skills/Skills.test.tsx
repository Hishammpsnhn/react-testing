import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('skills', () => {
  const skills = ['HTML', 'CSS', 'JS']
  test('render Correct', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })
  test('render skills Correctly', () => {
    render(<Skills skills={skills} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(skills.length)
  })
  test('render login button Correctly', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })
  test('render welcome button Correctly', () => {
    render(<Skills skills={skills} />)
    const welcomeButton = screen.queryByRole('button', {
      name: 'welcome',
    })
    expect(welcomeButton).not.toBeInTheDocument()
  })
  test('render welcome button evently Correctly', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    // screen.debug()
    const welcomeButton = await screen.findByRole(
      'button',
      {
        name: 'welcome',
      },
      { timeout: 1000 }
    )
    // screen.debug()
    expect(welcomeButton).toBeInTheDocument()
  })
})
