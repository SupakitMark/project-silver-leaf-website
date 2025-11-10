// src/pages/apply.js
// หน้าฟอร์มสำหรับสมัครหรือนัดเยี่ยมชมที่พัก

import React, { useState } from 'react';
import Head from 'next/head';

// Mock data
const homeName = "คุณตาคุณยาย เนอร์สซิ่งโฮม";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    applicantName: '',
    elderName: '',
    careType: '',
    preferredDate: '',
    preferredTime: '10:00',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ขอบคุณสำหรับการสมัคร/นัดเยี่ยม ${homeName}!\nเราได้บันทึกข้อมูลและจะติดต่อกลับไปยืนยันการนัดหมาย`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>สมัคร/นัดเยี่ยม {homeName} | Home Finder</title>
      </Head>

      {/* Header Bar */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            นัดเยี่ยมและสมัครเข้าพัก
          </h1>
        </div>
      </header>

      {/* Main Form Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            🏡 นัดเยี่ยมชม/สมัครเข้าพักที่ <span className='text-red-600'>{homeName}</span>
          </h2>
          <p className="text-gray-600 mb-8 border-b pb-4">
            กรุณากรอกข้อมูลเพื่ออำนวยความสะดวกในการจัดเตรียมการนัดหมาย
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. ข้อมูลผู้สูงอายุ */}
            <div className='bg-blue-50 p-4 rounded-lg border border-blue-200'>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">ส่วนที่ 1: ข้อมูลผู้สูงอายุเบื้องต้น</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="elderName" className="block text-sm font-medium text-gray-700">ชื่อ-นามสกุล ผู้สูงอายุ</label>
                      <input type="text" id="elderName" name="elderName" required onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="careType" className="block text-sm font-medium text-gray-700">ประเภทการดูแลที่ต้องการ</label>
                      <select id="careType" name="careType" required onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option value="">-- เลือกประเภท --</option>
                        <option value="long-term">ดูแลระยะยาวทั่วไป</option>
                        <option value="bedridden">ผู้ป่วยติดเตียง / ADL</option>
                        <option value="dementia">ผู้ป่วยสมองเสื่อม</option>
                        <option value="post-op">พักฟื้นหลังผ่าตัด/อุบัติเหตุ</option>
                      </select>
                    </div>
                </div>
            </div>

            {/* 2. ข้อมูลผู้นัดหมาย */}
            <div className='bg-green-50 p-4 rounded-lg border border-green-200'>
                <h3 className="text-xl font-semibold text-green-800 mb-3">ส่วนที่ 2: ข้อมูลผู้รับผิดชอบ/ผู้นัดหมาย</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="applicantName" className="block text-sm font-medium text-gray-700">ชื่อ-นามสกุล ผู้นัดหมาย</label>
                      <input type="text" id="applicantName" name="applicantName" required onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์/อีเมล</label>
                      <input type="text" id="contact" name="contact" required onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
                    </div>
                </div>
            </div>

            {/* 3. นัดหมายเยี่ยมชม */}
            <div className='bg-yellow-50 p-4 rounded-lg border border-yellow-200'>
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">ส่วนที่ 3: กำหนดวันนัดเยี่ยมชม (ไม่บังคับ)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">วันที่ต้องการนัดเยี่ยม</label>
                      <input type="date" id="preferredDate" name="preferredDate" onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500" />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">ช่วงเวลาที่สะดวก</label>
                      <select id="preferredTime" name="preferredTime" onChange={handleChange} value={formData.preferredTime} className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500">
                        <option value="10:00">10:00 น. (ช่วงเช้า)</option>
                        <option value="14:00">14:00 น. (ช่วงบ่าย)</option>
                        <option value="video-call">ขอวิดีโอคอลแทนการเยี่ยมสถานที่</option>
                      </select>
                    </div>
                </div>
            </div>

            {/* 4. รายการเอกสารที่ต้องเตรียม (Checklist) */}
            <div className="mt-8 pt-4 border-t border-gray-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">เอกสารประกอบการยื่นคำขอ (สำหรับเตรียมยื่นวันทำสัญญา)</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>สำเนาบัตรประจำตัวประชาชนและทะเบียนบ้านของผู้สูงอายุ</li>
                    <li>สำเนาบัตรประจำตัวประชาชนและทะเบียนบ้านของญาติหรือผู้รับรอง</li>
                    <li>ประวัติการรักษาและใบรับรองแพทย์จากโรงพยาบาล</li>
                    <li>รายการยาประจำตัวและผลตรวจสุขภาพ</li>
                </ul>
                <p className='text-sm mt-3 text-red-500'>**โปรดเตรียมเอกสารดังกล่าวให้พร้อมในวันนัดหมายหรือวันย้ายเข้า</p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-4 text-lg font-bold bg-blue-600 text-white rounded-lg shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]"
              >
                ยืนยันการนัดหมาย/สมัครเบื้องต้น
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
