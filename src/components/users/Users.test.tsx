import { render, screen } from "@testing-library/react"
import { Users } from "./Users"

describe("users", () => {
    test("render users", () => {
        render(<Users />)
        const HeadingElement = screen.getByText('Users')
        expect(HeadingElement).toBeInTheDocument()
    })
    test("render users ", async() => {
        render(<Users />)
        const users =await screen.findAllByRole('listitem')
        expect(users).toHaveLength(3)
    })
})