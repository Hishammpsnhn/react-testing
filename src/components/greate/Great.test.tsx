import { render, screen } from "@testing-library/react"
import Great from "./Great"


test("Greet render correctly" ,()=>{
    render(<Great/>)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})
// test("Greet render name" ,()=>{
//     render(<Great name="hisham"/>)
//     const textElement = screen.getByText('Hello hisham')
//     expect(textElement).toBeInTheDocument()
// })