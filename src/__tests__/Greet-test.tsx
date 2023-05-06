import { render, screen } from "@testing-library/react"
import Great from "../components/greate/Great"

describe('Great', () => {

    test("Greet render correctly", () => {
        render(<Great />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })
})
describe('nested',()=>{
    test("Greet render name", () => {
        render(<Great name="hisham" />)
        const textElement = screen.getByText('Hello hisham')
        expect(textElement).toBeInTheDocument()
    })
})
