import { render, screen } from "@testing-library/react"
import { Users } from "./Users"
import { server } from "../../mocks/server"
import { rest } from "msw"

describe("users", () => {
    test("render users", () => {
        render(<Users />)
        const HeadingElement = screen.getByText('Users')
        expect(HeadingElement).toBeInTheDocument()
    })
    test("render users ", async () => {
        render(<Users />)
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(3)
    })
    test("render errors", async () => {
        server.use(
            rest.get(
                "https://jsonplaceholder.typicode.com/users",
                (req,res,ctx)=>{
                    return res(ctx.status(500));
                }
            )
        );
        render(<Users />)
        const error = await screen.findByText('Error fetching users')
        expect(error).toBeInTheDocument()
    })
})