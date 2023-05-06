import { render, screen } from "@testing-library/react"
import Great from "./Great"

describe('Great', () => {
    test("render correctly", () => {
        render(<Great />)
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument()
    })
})

