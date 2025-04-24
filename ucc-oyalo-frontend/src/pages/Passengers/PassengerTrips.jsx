import React from 'react'
import { Download, Calendar, MapPin, Ticket, Clock, AlertCircle, CurrencyIcon } from 'lucide-react'

export default function PassengerTrips() {
  const trips = [
    {
      id: 'TRIP-24352',
      from: 'Accra',
      to: 'Takoradi',
      date: '2024-03-15',
      status: 'completed',
      price: 'GH₵ 120.00'
    },
    {
      id: 'TRIP-19876',
      from: 'Kumasi',
      to: 'Tamale',
      date: '2024-04-22',
      status: 'upcoming',
      price: 'GH₵ 200.00'
    }
  ]

  return (
    <div className='min-h-screen w-full bg-gray-50 p-4'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-6 text-2xl font-bold text-gray-800'>My Trips</h1>
        
        {/* Desktop Table */}
        <div className='hidden lg:block'>
          <div className='rounded-xl bg-white shadow-sm'>
            <table className='w-full'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-500'>Trip ID</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-500'>Route</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-500'>Date</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-500'>Status</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-500'>Amount Paid</th>
                  <th className='px-6 py-4 text-right text-sm font-semibold text-gray-500'>Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {trips.map((trip) => (
                  <tr key={trip.id} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 text-sm font-medium text-gray-900'>{trip.id}</td>
                    <td className='px-6 py-4 text-sm text-gray-600'>
                      <div className='flex items-center gap-2'>
                        <MapPin className='size-4 text-green-600' />
                        {trip.from} → {trip.to}
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-600'>
                      <div className='flex items-center gap-2'>
                        <Calendar className='size-4 text-blue-600' />
                        {trip.date}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        trip.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {trip.status}
                      </span>
                    </td>
                    <td className=' text-sm text-gray-600 flex items-center gap-2 px-6 py-4'>
                      <CurrencyIcon className='size-4 text-blue-600'/>
                      {trip.price}
                    </td>
                    <td className='px-6 py-4 text-right'>
                      <button className='flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors'>
                        <Download className='size-4' />
                        Ticket
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {trips.length === 0 && (
              <div className='p-8 text-center'>
                <div className='mx-auto mb-4 size-16 text-gray-400'>
                  <AlertCircle className='size-full' />
                </div>
                <p className='text-gray-500'>No trips found</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className='lg:hidden'>
          {trips.map((trip) => (
            <div key={trip.id} className='mb-4 rounded-xl bg-white p-4 shadow-sm'>
              <div className='flex items-center justify-between border-b pb-3'>
                <h3 className='font-medium text-gray-900'>{trip.id}</h3>
                <span className={`text-xs font-medium ${
                  trip.status === 'completed' 
                    ? 'text-green-800' 
                    : 'text-blue-800'
                }`}>
                  {trip.status}
                </span>
              </div>
              
              <div className='space-y-3 pt-3'>
                <div className='flex items-center gap-2 text-sm'>
                  <MapPin className='size-4 text-green-600' />
                  <span className='font-medium'>Route:</span>
                  {trip.from} → {trip.to}
                </div>
                
                <div className='flex items-center gap-2 text-sm'>
                  <Calendar className='size-4 text-blue-600' />
                  <span className='font-medium'>Date:</span>
                  {trip.date}
                </div>
                
                <div className='flex items-center gap-2 text-sm'>
                  <Ticket className='size-4 text-purple-600' />
                  <span className='font-medium'>Price:</span>
                  {trip.price}
                </div>
                
                <button className='mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors'>
                  <Download className='size-4' />
                  Download Ticket
                </button>
              </div>
            </div>
          ))}
          
          {trips.length === 0 && (
            <div className='rounded-xl bg-white p-6 text-center shadow-sm'>
              <div className='mx-auto mb-4 size-16 text-gray-400'>
                <AlertCircle className='size-full' />
              </div>
              <p className='text-gray-500'>No trips found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}