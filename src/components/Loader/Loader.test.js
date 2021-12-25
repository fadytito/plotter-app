import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';


describe('Loader', () => {
    it('should display children passed', async () => {
        render(<Loader>loading</Loader>)
        const headingElement = screen.getByText('loading')
        expect(headingElement).toBeInTheDocument()
    })
})
