import React, { useState } from 'react';

const BusSeatLayout = ({ totalSeats = 20, bookedSeats = [] }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;
    
    setSelectedSeats(prev => 
      prev.includes(seatNumber)
        ? prev.filter(s => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const renderSeats = () => {
    const seats = [];
    const seatsPerRow = 4; // 2 seats each side of aisle

    for (let row = 0; row < Math.ceil(totalSeats / seatsPerRow); row++) {
      const leftSeat1 = row * seatsPerRow + 1;
      const leftSeat2 = row * seatsPerRow + 2;
      const rightSeat1 = row * seatsPerRow + 3;
      const rightSeat2 = row * seatsPerRow + 4;

      seats.push(
        <div key={`row-${row}`} className="flex justify-between mb-4">
          {/* Left side seats */}
          <div className="flex space-x-2">
            {leftSeat1 <= totalSeats && (
              <Seat 
                number={leftSeat1}
                isBooked={bookedSeats.includes(leftSeat1)}
                isSelected={selectedSeats.includes(leftSeat1)}
                onClick={handleSeatClick}
              />
            )}
            {leftSeat2 <= totalSeats && (
              <Seat 
                number={leftSeat2}
                isBooked={bookedSeats.includes(leftSeat2)}
                isSelected={selectedSeats.includes(leftSeat2)}
                onClick={handleSeatClick}
              />
            )}
          </div>

          {/* Aisle - visual divider */}
          <div className="w-10 border-t-2 border-dashed border-gray-400 mx-2 self-center"></div>

          {/* Right side seats */}
          <div className="flex space-x-2">
            {rightSeat1 <= totalSeats && (
              <Seat 
                number={rightSeat1}
                isBooked={bookedSeats.includes(rightSeat1)}
                isSelected={selectedSeats.includes(rightSeat1)}
                onClick={handleSeatClick}
              />
            )}
            {rightSeat2 <= totalSeats && (
              <Seat 
                number={rightSeat2}
                isBooked={bookedSeats.includes(rightSeat2)}
                isSelected={selectedSeats.includes(rightSeat2)}
                onClick={handleSeatClick}
              />
            )}
          </div>
        </div>
      );
    }
    return seats;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-xl shadow-md">
      {/* Bus Header */}
      <div className="bg-gray-800 text-white text-center py-3 rounded-t-lg mb-6">
        <h2 className="text-xl font-bold">🚌 Oyalo</h2>
        <p className="text-sm">Select your seats</p>
      </div>

      {/* Seat Layout */}
      <div className="mb-6">
        {renderSeats()}
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-4 mb-6">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded mr-1"></div>
          <span className="text-sm">Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-400 rounded mr-1"></div>
          <span className="text-sm">Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 rounded mr-1"></div>
          <span className="text-sm">Booked</span>
        </div>
      </div>

      {/* Selection Summary */}
      {selectedSeats.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-medium text-blue-800 mb-2">Your Selection:</h3>
          <p className="text-blue-600">
            Seats: {selectedSeats.join(', ')} | Total: ${selectedSeats.length * 15}
          </p>
          <button 
            className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200"
            onClick={() => alert(`Booking confirmed for seats: ${selectedSeats.join(', ')}`)}
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};

const Seat = ({ number, isBooked, isSelected, onClick }) => {
  const seatClasses = `
    w-10 h-10 flex items-center justify-center rounded-md cursor-pointer transition-all duration-200
    ${isBooked 
      ? 'bg-red-500 cursor-not-allowed' 
      : isSelected 
        ? 'bg-yellow-400 transform scale-110 shadow-md' 
        : 'bg-green-500 hover:bg-green-600 hover:shadow-md hover:transform scale-105'
    }
    ${!isBooked && 'hover:ring-2 hover:ring-offset-2 hover:ring-green-400'}
  `;

  return (
    <div 
      className={seatClasses.trim()}
      onClick={() => !isBooked && onClick(number)}
    >
      <span className={`font-medium ${isSelected ? 'text-gray-800' : 'text-white'}`}>
        {number}
      </span>
    </div>
  );
};

export default BusSeatLayout;