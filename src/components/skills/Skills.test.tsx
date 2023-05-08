import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

describe('skills', () => {
    const skills = ["HTML", "CSS", "JS"]
    test("render Correct", () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()

    })
    test("render skills Correctly", () => {
        render(<Skills skills={skills} />)
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(skills.length)

    })
})