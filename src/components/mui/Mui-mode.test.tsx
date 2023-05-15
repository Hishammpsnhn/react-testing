import { render, screen } from "@testing-library/react"
import { MuiMode } from "./MuiMode"
import { AppProviders } from "../../providers/AppProviders"

describe("mui-mode", () => {
    test("render corrctly", () => {
        render(<MuiMode/>,{
            wrapper:AppProviders,
        })
        const HeadingElement = screen.getByRole('heading')
        expect(HeadingElement).toHaveTextContent("dark mode")
    })
})