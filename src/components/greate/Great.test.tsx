import { render, screen } from "@testing-library/react"
import Great from "./Great"

describe('Great', () => {
    test("render correctly", () => {
        render(<Great />)
        const textElement = screen.getByText('Hello Guest')
        expect(textElement).toBeInTheDocument()
    })
})

describe('Naming', () => {
    test("render name", () => {
        render(<Great name="hisham" />)
        const textElement = screen.getByText('Hello hisham')
        expect(textElement).toBeInTheDocument()
    })
})

