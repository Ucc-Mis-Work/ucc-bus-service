import React from 'react'

export default function PassengerTrips() {
  return (
    <div className='min-h-screen w-full'>
      <div className='adjust p-3'>
        <table className='w-full rounded-t-lg overflow-hidden'>
          <thead className='bg-primary text-white'>
            <tr>
              <th className='hidden lg:table-cell'>ID</th>
              <th>From</th>
              <th>To</th>
              <th className='hidden lg:table-cell'>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='hidden lg:table-cell'>24352</td>
              <td>Accra</td>
              <td>Takoradi</td>
              <td className='hidden lg:table-cell'>2 months ago</td>
              <td>
                <button className='bg-red-700 p-3 text-white rounded-xl text-sm shadow'>
                  Download Ticket
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
