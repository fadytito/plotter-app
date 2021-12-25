import { render, screen } from '@testing-library/react';
import { Error } from './Error';


describe('Error', () => {
    it('should display children passed', async () => {
        render(<Error>error</Error>)
        const headingElement = screen.getByText('error')
        expect(headingElement).toBeInTheDocument()
    })
})
