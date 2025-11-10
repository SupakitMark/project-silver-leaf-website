// src/components/HomeCard.js

import React from 'react';

export default function HomeCard({ home }) {
    // ฟังก์ชันแปลงชื่อประเภทการดูแลให้เป็นภาษาไทยที่อ่านง่าย
    const getCareLabel = (type) => {
        switch (type) {
            case 'bedridden': return 'ผู้ป่วยติดเตียง';
            case 'dementia': return 'สมองเสื่อม';
            case 'post-op': return 'พักฟื้นหลังผ่าตัด';
            case 'long-term': return 'ดูแลระยะยาว';
            default: return type;
        }
    };

    return (
      <div className="flex bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
        
        {/* Home Image (Mock-up) */}
        <div className="w-1/3 min-w-[180px] bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-sm p-4 relative">
            <span className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                Top Pick
            </span>
            <span className='text-center'>[Placeholder Image]</span>
        </div>

        {/* Details and Actions */}
        <div className="w-2/3 p-5 flex flex-col justify-between">
          <div>
            {/* Title and Rating */}
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
                <a href={`/details/${home.id}`}>{home.name}</a>
              </h3>
              <div className="flex items-center text-sm font-semibold text-yellow-600">
                ⭐ {home.rating} ({home.reviews} รีวิว)
              </div>
            </div>
            
            {/* Location and Care Types */}
            <p className="text-sm text-gray-500 mt-1 mb-2 flex items-center">
                <span className="mr-1">📍</span> {home.location}
            </p>
            <div className="flex flex-wrap gap-2">
                {home.careTypes.map(type => (
                    <span key={type} className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                        {getCareLabel(type)}
                    </span>
                ))}
                {home.hasRN && <span className="text-xs font-medium bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full">มีพยาบาลประจำ</span>}
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-sm line-clamp-2">{home.description}</p>
          </div>

          {/* Price and Action Button */}
          <div className="mt-4 flex justify-between items-center pt-3 border-t">
            <div className="text-xl font-extrabold text-blue-600">
              ฿{home.price.toLocaleString()}
              <span className='text-sm font-normal text-gray-500'> / เดือน</span>
            </div>
            <a 
              href={`/application?homeId=${home.id}`} 
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
            >
              สมัคร/นัดเยี่ยม
            </a>
          </div>
        </div>
      </div>
    );
}
