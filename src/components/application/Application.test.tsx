import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe('application ', () => {
    test('renders correctly', () => {
        render(<Application />)

        const HeadingElement = screen.getByRole('heading', {
            level: 1
        })
        expect(HeadingElement).toBeInTheDocument()

        const Heading1Element = screen.getByRole('heading', {
            level: 2
        })
        expect(Heading1Element).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument()

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(bioElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument()

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument()

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()


    })
})