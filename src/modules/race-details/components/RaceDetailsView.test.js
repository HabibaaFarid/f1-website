import { render, screen } from '@testing-library/react'
import RaceDetailsView from './RaceDetailsView'

describe('test rendering race details', () => {
    test('display of data', () => {
        const testData = [
            {
                Driver: {
                    givenName: 'Lewis',
                    familyName: 'Hamilton',
                    nationality: 'British',
                },
                position: '1',
                Constructor: {
                    name: 'Mercedes',
                },
                laps: 44,
            },
            {
                Driver: {
                    givenName: 'Max',
                    familyName: 'Verstappen',
                    nationality: 'Dutch',
                },
                position: '2',
                Constructor: {
                    name: 'Red Bull Racing',
                },
                laps: 44,
            },
        ]

        render(<RaceDetailsView details={testData} />)

        testData.forEach(d => {
            const name = `${d.Driver.givenName} ${d.Driver.familyName}`
            expect(screen.getByText(name)).toBeInTheDocument()
        })
    })
})