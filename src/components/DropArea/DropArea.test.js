import { render, screen } from '@testing-library/react';
import { DropArea } from './DropArea';

describe('DropArea', () => {
    it('should display one piece of data if primitive value passed', async () => {
        render(<DropArea droppedData={'data'}/>)
        const droppedDataElement = screen.getByText('data')
        expect(droppedDataElement).toBeInTheDocument()
    })

    it('should display array of data if array passed', async () => {
        render(<DropArea droppedData={['data', 'data']}/>)
        const droppedDataElements = screen.getAllByText('data')
        expect(droppedDataElements.length).toBe(2)
    })

    it('should display children passed', async () => {
        render(<DropArea>children test</DropArea>)
        const childrenElement = screen.getByText('children test')
        expect(childrenElement).toBeInTheDocument()
    })
})
