import { render, screen } from "@testing-library/react"
import { CounterTwo } from "./Counter-two"
import user from "@testing-library/user-event"

describe("counter-two", () => {
    test(" counter render correctly", () => {
        render(<CounterTwo count={1} />)
        const HeadingElement = screen.getByRole('heading')
        expect(HeadingElement).toHaveTextContent("Counter Two")
    })
    test(" Handler render correctly",async () => {
        user.setup()
        const incHandler = jest.fn();
        const decHandler = jest.fn();
        render(<CounterTwo count={1} handleDecrement={decHandler} handleIncrement={incHandler} />)

        const incButton = screen.getByRole("button", { name: "Increment" })
        const DecButton = screen.getByRole("button", { name: "Decrement" })

        await user.click(incButton)
        await user.click(DecButton)

        expect(incHandler).toHaveBeenCalledTimes(1)
        expect(decHandler).toHaveBeenCalledTimes(1)
    })
})