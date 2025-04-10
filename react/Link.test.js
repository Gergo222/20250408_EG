import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Link from './Link'

/**
 * @jest-environment jsdom
 */
it('changes class on hover', async()=>{
    render(<Link page={"https://google.com"}>Google</Link>)

    expect(screen.getByTestId("link")).toHaveTextContent("Google") // virtuális megjelenitő, meg vizsgálja hogy látszik a megadot szöveg

    await userEvent.hover(screen.getByTestId('link'))

    expect(screen.getByTestId("link").className).toBe("hovered")

    await userEvent.unhover(screen.getByTestId("link"))
    expect(screen.getByTestId("link").className).toBe("")
})

it('href is same page', async () =>{
    render(<Link>Google</Link>)

    expect(screen.getByTestId("link").getAttribute("href")).toBe("#")
})