import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Input from './Input'

it("there is a button, and an input", async ()=> {
    render(<Input />)

    expect(screen.getByTestId("input")).toBeInTheDocument()

    await userEvent.type(screen.getByTestId("input"), "alma")
    expect(screen.getByTestId("input").value).toBe("alma")

    await userEvent.click(screen.getByTestId("button"))
    expect(screen.getByTestId("p")).toHaveTextContent("Kiírva: alma")
})