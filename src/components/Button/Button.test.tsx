import React from "react"
import { render } from '@testing-library/react'
import BaseButton from "./Button"

describe("<BaseButton>", () => {
  test("it should render to the page", () => {
    render(<BaseButton />)
  })
})