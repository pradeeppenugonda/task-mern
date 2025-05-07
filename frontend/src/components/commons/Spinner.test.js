// import '@testing-library/jest-dom/extend-expect';
import React from "react"
import { render, screen } from "@testing-library/react"
import Spinner from './Spinner'

describe('Spinner', () => {

    test('render correctly', () => {
        render(<Spinner />)
        
        const contanerDiv = screen.getByTestId("spin-container")
        expect(contanerDiv).toBeInTheDocument();

        const innerDiv = screen.getByTestId("inner-container")
        expect(innerDiv).toBeInTheDocument();

    })

})
