import React, { useState } from 'react'
import { Button, Divider, InputAdornment, TextField } from '@mui/material'
import { Bus, Clock, MapPin, Search, Ticket, Users, WalletCards } from 'lucide-react'
import Title from '../../typo/Title'
import RouteCard from '../../component/Card/RouteCard'
import BusSeatLayout from '../../component/BusSeatLayout'
import CardTag from '../../component/Card/CardTag'
import BusLabelTags from '../../component/BusLabelTags'

const mockRoutes = [
  {
    id: 1,
    name: 'Accra to Kumasi Express',
    pickup: 'UCC Campus',
    destination: 'Kumasi Central',
    departure: '08:00 AM',
    arrival: '12:30 PM',
    duration: '4h 30m',
    price: 120,
    amenities: ['AC', 'Wi-Fi', 'TV'],
    busType: 'VIP Bus',
    seats: 36
  },
  // Add more mock routes as needed
]

export default function BookTrip() {
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [selectedSeats, setSelectedSeats] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats(prev => 
      prev.includes(seatNumber) 
        ? prev.filter(s => s !== seatNumber) 
        : [...prev, seatNumber]
    )
  }

  const calculateTotal = () => selectedRoute ? selectedSeats.length * selectedRoute.price : 0

  return (
    <div className='adjust py-6 px-3 h-full pb-20'>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className='mb-4 md:mb-0'>
          <Title
            text={'Book A Trip'}
            otherStyles={'text-primary text-2xl md:text-3xl'}
          />
          <p className='text-gray-600 text-sm'>Select your preferred route and choose seats</p>
        </div>
        <div className='w-full md:w-[40%]'>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search className='text-primary'/>
                </InputAdornment>
              ),
              style: { borderRadius: '12px' }
            }}
            placeholder='Search routes...'
          />
        </div>
      </div>
      <Divider sx={{ my: 2 }}/>

      <div className="grid lg:grid-cols-10 gap-4 h-full">
        {/* Routes List */}
        <div className='lg:col-span-4 h-full overflow-y-auto bg-white rounded-xl shadow-sm'>
          <div className='p-4 bg-gray-50 border-b sticky top-0 z-20'>
            <p className='text-lg font-semibold text-gray-700 flex items-center gap-2'>
              <Bus className='text-blue-600'/>
              Available Trips
            </p>
          </div>
          <div className='p-4 space-y-3'>
            {mockRoutes.map((route, index) => (
              <div 
                key={route.id}
                onClick={() => setSelectedRoute(route)}
                className={`p-4 rounded-lg border-l-4 cursor-pointer transition-all ${
                  selectedRoute?.id === route.id 
                    ? 'border-primary bg-blue-50 shadow-md' 
                    : 'border-transparent hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className='flex items-center justify-between'>
                  <h3 className='font-medium text-gray-800'>{route.name}</h3>
                  <span className='text-sm text-primary'>GH₵{route.price}</span>
                </div>
                <div className='mt-2 flex items-center gap-2 text-sm text-gray-600'>
                  <Clock className='size-4 text-green-600'/>
                  {route.departure} - {route.arrival}
                </div>
                <div className='mt-1 flex items-center gap-2 text-sm text-gray-600'>
                  <Users className='size-4 text-blue-600'/>
                  {route.seats} seats available
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trip Details */}
        <div className='lg:col-span-6 h-full overflow-y-auto'>
          {selectedRoute ? (
            <div className='bg-white rounded-xl shadow-sm p-6'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-xl font-semibold text-gray-800'>
                  {selectedRoute.pickup} → {selectedRoute.destination}
                </h2>
                <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm'>
                  {selectedRoute.busType}
                </span>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
                <CardTag
                  icon={<Clock className='text-blue-600'/>}
                  head='Departure Time'
                  value={selectedRoute.departure}
                />
                <CardTag
                  icon={<Clock className='text-green-600'/>}
                  head='Arrival Time'
                  value={selectedRoute.arrival}
                />
                <CardTag
                  icon={<MapPin className='text-red-600'/>}
                  head='Pickup Point'
                  value={selectedRoute.pickup}
                />
                <CardTag
                  icon={<MapPin className='text-purple-600'/>}
                  head='Destination'
                  value={selectedRoute.destination}
                />
              </div>

              <div className='mb-6'>
                <h3 className='text-lg font-semibold mb-3 flex items-center gap-2'>
                  <Ticket className='text-orange-600'/>
                  Seat Selection
                </h3>
                <BusSeatLayout 
                  totalSeats={selectedRoute.seats}
                  selectedSeats={selectedSeats}
                  onSeatSelect={handleSeatSelect}
                />
              </div>

              <div className='sticky bottom-0 bg-white pt-4 border-t'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <p className='font-medium text-gray-600'>
                      Selected Seats: {selectedSeats.join(', ') || 'None'}
                    </p>
                    <p className='text-2xl font-bold text-primary'>
                      Total: GH₵{calculateTotal()}
                    </p>
                  </div>
                  <Button 
                    variant='contained'
                    disabled={selectedSeats.length === 0}
                    className='bg-primary hover:bg-primary-dark'
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '12px',
                      textTransform: 'none'
                    }}
                  >
                    Book {selectedSeats.length} Seat(s)
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className='h-full flex items-center justify-center bg-white rounded-xl shadow-sm'>
              <div className='text-center p-8 text-gray-500'>
                <WalletCards className='size-16 mx-auto mb-4 text-gray-400'/>
                <p className='text-lg'>Select a route to view details and book seats</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}