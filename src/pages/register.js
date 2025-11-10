// src/pages/register.js
// หน้าฟอร์มสำหรับเจ้าของบ้านพักเพื่อลงทะเบียนที่พัก

import React, { useState } from 'react';
import Head from 'next/head';

export default function RegisterHome() {
  const [formData, setFormData] = useState({
    homeName: '',
    location: '',
    description: '',
    priceMonthly: '',
    hasRN: false,
    hasRamp: true,
    careTypes: [],
  });
  
  const [photos, setPhotos] = useState(0); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
        if (name === 'careTypes') {
            setFormData(prev => ({ 
                ...prev, 
                careTypes: checked 
                    ? [...prev.careTypes, value] 
                    : prev.careTypes.filter(type => type !== value) 
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: checked }));
        }
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePhotoUpload = (e) => {
      setPhotos(e.target.files.length); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ขอบคุณ ${formData.homeName} ได้รับการยื่นลงทะเบียนแล้ว!`);
  };

  const careOptions = [
      { id: 'bedridden', label: 'ผู้ป่วยติดเตียง' },
      { id: 'dementia', label: 'สมองเสื่อม' },
      { id: 'post-op', label: 'พักฟื้นหลังผ่าตัด' },
      { id: 'long-term', label: 'ดูแลระยะยาว' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ลงทะเบียนบ้านพัก | Home Finder</title>
      </Head>

      {/* Header Bar */}
      <header className="bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 text-center">
          <h1 className="text-3xl font-extrabold">
            🌟 ลงทะเบียนบ้านพักของคุณ 🌟
          </h1>
          <p className="mt-1 text-blue-200">เข้าถึงครอบครัวที่กำลังมองหาที่ดูแลผู้สูงอายุอย่างต่อเนื่อง</p>
        </div>
      </header>

      {/* Main Form Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl border-t-4 border-blue-600">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">รายละเอียดที่พัก</h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. ข้อมูลพื้นฐาน */}
            <section className='border p-5 rounded-lg bg-gray-50'>
                <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">1. ข้อมูลติดต่อและที่ตั้ง</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="homeName" className="block text-sm font-medium text-gray-700">ชื่อที่พัก (ตามใบอนุญาต)</label>
                      <input type="text" id="homeName" name="homeName" required onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">จังหวัด/อำเภอ ที่ตั้ง</label>
                      <input type="text" id="location" name="location" required onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">คำโฆษณาใต้ภาพ/รายละเอียดที่พัก (สูงสุด 500 ตัวอักษร)</label>
                    <textarea id="description" name="description" rows="3" required onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm resize-none"></textarea>
                </div>
            </section>

            {/* 2. รูปภาพที่พัก */}
            <section className='border p-5 rounded-lg bg-yellow-50'>
                <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">2. รูปภาพที่พัก (อัปโหลดสูงสุด 10 รูป)</h3>
                <input 
                    type="file" 
                    id="photos" 
                    name="photos" 
                    multiple 
                    accept="image/*"
                    onChange={handlePhotoUpload} 
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
                />
                <p className='text-sm mt-2 text-gray-600'>อัปโหลดภาพตามที่ต้องการ ตอนนี้เลือกไว้: **{photos}** รูป</p>
            </section>

            {/* 3. การดูแลและบริการ */}
            <section className='border p-5 rounded-lg bg-blue-50'>
                <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">3. การดูแลทางการแพทย์และสิ่งอำนวยความสะดวก</h3>
                
                {/* ประเภทการดูแล */}
                <label className="block text-sm font-medium text-gray-700 mb-2">ประเภทการดูแลที่เชี่ยวชาญ (เลือกได้หลายข้อ)</label>
                <div className="flex flex-wrap gap-4 mb-4">
                    {careOptions.map(option => (
                        <div key={option.id} className="flex items-center">
                            <input type="checkbox" id={option.id} name="careTypes" value={option.id} onChange={handleChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor={option.id} className="ml-2 text-sm text-gray-700">{option.label}</label>
                        </div>
                    ))}
                </div>

                {/* บุคลากร/สิ่งอำนวยความสะดวก */}
                <div className="space-y-3 mt-4">
                    <div className="flex items-center">
                        <input type="checkbox" id="hasRN" name="hasRN" checked={formData.hasRN} onChange={handleChange} className="h-4 w-4 text-green-600 border-gray-300 rounded" />
                        <label htmlFor="hasRN" className="ml-2 text-sm font-medium text-gray-700">มีพยาบาลวิชาชีพ (RN) ประจำ 24 ชม. (การดูแลทางการแพทย์)</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="hasRamp" name="hasRamp" checked={formData.hasRamp} onChange={handleChange} className="h-4 w-4 text-green-600 border-gray-300 rounded" />
                        <label htmlFor="hasRamp" className="ml-2 text-sm font-medium text-gray-700">มีทางลาด/ลิฟต์สำหรับวีลแชร์ (อารยสถาปัตย์)</label>
                    </div>
                </div>

                <p className='text-sm mt-4 text-blue-700'>*ระบุรายละเอียดกิจกรรมสันทนาการและความปลอดภัยเพิ่มเติมในช่องโฆษณา</p>
            </section>
            
            {/* 4. ราคาและเอกสารใบอนุญาต */}
            <section className='border p-5 rounded-lg bg-red-50'>
                <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">4. ราคาและเอกสารรับรอง</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="priceMonthly" className="block text-sm font-medium text-gray-700">ราคาเริ่มต้นต่อเดือน (บาท)</label>
                      <input type="number" id="priceMonthly" name="priceMonthly" required onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div>
                      <label htmlFor="licenseDoc" className="block text-sm font-medium text-gray-700">อัปโหลดเอกสารใบอนุญาต (สำคัญ)</label>
                      <input type="file" id="licenseDoc" name="licenseDoc" required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-700 hover:file:bg-red-200" />
                      <p className='text-xs mt-1 text-red-600'>*ต้องมีใบอนุญาตจาก พม. และ/หรือ สบส.</p>
                    </div>
                </div>
            </section>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 text-xl font-bold bg-blue-600 text-white rounded-lg shadow-xl hover:bg-blue-700 transition duration-300"
              >
                ยืนยันและส่งคำขอลงทะเบียน
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
