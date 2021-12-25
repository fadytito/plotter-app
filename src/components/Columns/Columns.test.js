import { render, screen } from '@testing-library/react';
import { Columns } from './Columns';


describe('Columns', () => {
    it('should display column items', async () => {
        render(<Columns/>)
        const columnItemElement = await screen.findByTestId('column-item-0')
        expect(columnItemElement).toBeTruthy()
    })
})
