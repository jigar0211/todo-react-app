import React from 'react'

export default function Header(props) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);

    const [weekday, month, day, year] = formattedDate.toUpperCase().split(/,?\s+/);
   
  return (
    <>
    <div className='todo-date-container'>
            <div className='date-container'>
                <div className='day'>{day}</div>
                <div className='month-year'>
                    <span><b>{month}</b></span>
                    <span>{year}</span>
                </div>
            </div>
            <div className='weekday'>{weekday}</div>
    </div>
    </>
  )
}
