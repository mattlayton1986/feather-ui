import React from "react"
import { render } from '@testing-library/react'
import Button from "./Button"

describe("<Button>", () => {
  test("it should render to the page", () => {
    let button = render(<Button />)
    console.log(button)
  })
})