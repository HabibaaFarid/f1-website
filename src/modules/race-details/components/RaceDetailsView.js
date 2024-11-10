import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);


const PerformanceChart = ({ drivers }) => {
    const labels = []
    const info = []
    drivers?.forEach(driver => {
        labels.push(`${driver.Driver.givenName} ${driver.Driver.familyName}`)
        info.push(driver.laps)
    })

    const data = {
        labels,
        datasets: [
            {
                label: 'Number of Laps',
                data: info,
                fill: false,
                backgroundColor: [
                    '#E10600',
                    '#808080',
                    '#000000'
                ],
                barThickness: 20,
            },
        ],
    };

    return (
        <div className='justify-self-center w-[70%]'>
            <Bar data={data} />
        </div>
    )
};

function DetailsBox({ title, text }) {
    return (
        <div className='flex justify-center items-center '>
            <p className='p-[16px] font-medium'>{title}:</p>
            <p className='p-[16px] font-medium'>{text}</p>
        </div>
    )
}

function RaceDetailsView({ details }) {
    return (
        <div className='grid w-[80%] justify-self-center space-y-3'>
            <div className='border-2 shadow-sm w-full p-3 rounded-xl'>
                <p className='text-[18px] font-medium'>Race Performance</p>
                <PerformanceChart drivers={details} />
            </div>

            <div className='border-2 shadow-sm w-full p-3 rounded-xl'>
                <p className='text-[18px] font-medium'>Driver Details</p>
                <div className='flex flex-col items-center gap-3 p-5'>
                    {
                        details.map(driver => {
                            return (
                                <div className='flex flex-col justify-center items-center border-2 p-5 w-full rounded-xl space-y-3 shadow-md shadow-red-200'>
                                    <p className='text-[20px] font-semibold'>{driver.Driver.givenName} {driver.Driver.familyName}</p>
                                    <div className='grid grid-cols-3 justify-center items-center gap-2 w-full'>
                                        <DetailsBox title={'Nationality'} text={`${driver.Driver.nationality}`} />
                                        <DetailsBox title={'Rank'} text={`${driver.position}`} />
                                        <DetailsBox title={'Team'} text={`${driver.Constructor.name}`} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default RaceDetailsView