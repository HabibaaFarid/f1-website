import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ViewRacesButton from './ViewRacesButton'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
}))

describe('test view races button', () => {
    const mockNavigate = jest.fn()

    beforeEach(() => {
        // Reset the mock before each test
        mockNavigate.mockClear();
        // Mock the useNavigate hook to return the mock function
        require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
    })

    test('click the button', () => {
        const season = 1960


        render(
            <BrowserRouter>
                <ViewRacesButton season={season} />
            </BrowserRouter>
        )

        const viewRacesButton = screen.getByText('View Races');

        fireEvent.click(viewRacesButton)

        expect(mockNavigate).toHaveBeenCalledWith(`/season/${season}`)
    })
})