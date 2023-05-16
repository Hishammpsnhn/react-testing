import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('application', () => {
  test('renders correctly', () => {
    render(<Application />)

    const HeadingElement = screen.getByRole('heading', {
      level: 1,
    })

    expect(HeadingElement).toBeInTheDocument()

    const Heading1Element = screen.getByRole('heading', {
      level: 2,
    })
    expect(Heading1Element).toBeInTheDocument()

    const Heading1Element3 = screen.getByDisplayValue('hisham')
    expect(Heading1Element3).toBeInTheDocument()

    const paragraph = screen.getByText((content) => content.startsWith('All'))
    expect(paragraph).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const image = screen.getByAltText('a person with a laptop')
    expect(image).toBeInTheDocument()

    const InputText = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(InputText).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByPlaceholderText('Fullname')
    expect(nameElement2).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const CheckBox = screen.getByLabelText(
      'I agree to the terms and conditions'
    )
    expect(CheckBox).toBeInTheDocument()

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})
