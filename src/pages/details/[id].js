// src/pages/details/[id].js
// หน้ารายละเอียดที่พัก (Dynamic Route)

import React from 'react';
import Head from 'next/head';
// สังเกตการเรียกไฟล์จากโฟลเดอร์ utils ที่อยู่ระดับเดียวกันกับ pages
import { initialHomes, careTypes } from '../../utils/data'; 

// --- The Detail Page Component ---
export default function HomeDetail({ home }) {
    
    if (!home) {
        return <div className="text-center py-20 text-xl font-bold">ไม่พบข้อมูลที่พัก</div>;
    }

    const getCareLabel = (typeValue) => {
        const foundType = careTypes.find(t => t.value === typeValue);
        return foundType ? foundType.label : typeValue;
    };

    const features = [
        { icon: '💰', label: 'ราคาเริ่มต้น', value: `฿${home.price.toLocaleString()}/เดือน` },
        { icon: '📍', label: 'ที่ตั้ง', value: home.location },
        { icon: '⭐', label: 'คะแนนรีวิว', value: `${home.rating} (${home.reviews} รีวิว)` },
        { icon: '👩‍⚕️', label: 'พยาบาล 24 ชม.', value: home.hasRN ? 'มี' : 'ไม่มี' },
        { icon: '♿', label: 'ทางลาดวีลแชร์', value: home.hasRamp ? 'มี' : 'ไม่มี' },
    ];

    const careDescription = home.careTypes.map(getCareLabel).join(', ');

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>{home.name} | Home Finder</title>
            </Head>

            {/* Header / Navbar Mock-up */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold text-blue-600">Home Finder</a>
                    <div className="space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600">แชท</a>
                        <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">เข้าสู่ระบบ</a>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="container mx-auto px-4 py-10">
                <div className="max-w-5xl mx-auto">

                    {/* Home Header */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h1 className="text-4xl font-extrabold text-gray-800">{home.name}</h1>
                        <p className="text-lg text-gray-500 mt-1 flex items-center">
                            <span className="mr-1">📍</span> {home.location}
                        </p>
                        <div className="flex items-center mt-3 space-x-4">
                            <div className="text-xl font-bold text-yellow-600 flex items-center">
                                ⭐ {home.rating}
                            </div>
                            <p className="text-gray-600">({home.reviews} รีวิวจากผู้เข้าพักจริง)</p>
                            <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">
                                ตรารับรองมาตรฐาน
                            </span>
                        </div>
                    </div>

                    {/* Image Gallery Mock-up */}
                    <div className="mt-8 bg-gray-200 h-96 rounded-xl overflow-hidden flex items-center justify-center text-gray-500 text-xl font-bold shadow-md">
                        [Placeholder Image Gallery: 10 รูปที่อัปโหลดโดยเจ้าของที่พัก]
                    </div>

                    {/* Details and Sidebar */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Left Column: Descriptions and Services */}
                        <div className="lg:col-span-2 space-y-8">
                            
                            <section className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">รายละเอียดโดยย่อ</h2>
                                <p className="text-gray-700 leading-relaxed">{home.description}</p>
                            </section>

                            <section className="bg-white p-6 rounded-xl shadow-md">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">🩺 การดูแลที่ให้บริการ</h2>
                                <div className='space-y-3'>
                                    <p className='text-lg font-semibold text-blue-700'>
                                        ประเภทที่เชี่ยวชาญ: <span className='font-normal text-gray-700'>{careDescription}</span>
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>**การดูแลทางการแพทย์:** พยาบาล 24 ชม. (RN/PN), การตรวจสุขภาพประจำปี, การเรียกฉุกเฉินได้ทันที</li>
                                        <li>**สิ่งอำนวยความสะดวก:** เน้นอารยสถาปัตยกรรม, ทางลาดวีลแชร์, อุปกรณ์กดเรียกเจ้าหน้าที่ทุกเตียง, เครื่องทำน้ำอุ่น</li>
                                        <li>**ความปลอดภัย:** ระบบรักษาความปลอดภัย, การออกแบบห้องพักที่คำนึงถึงความปลอดภัยของผู้สูงอายุ</li>
                                        <li>**อาหารและโภชนาการ:** ควบคุมโภชนาการและอาหารเฉพาะโรค</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="bg-white p-6 rounded-xl shadow-md">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 กิจกรรมและคุณภาพชีวิต</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>มีกิจกรรมสันทนาการในแต่ละเทศกาลต่าง ๆ เช่น วันพ่อ วันแม่ วันปีใหม่</li>
                                    <li>กิจกรรมที่หลากหลาย เช่น ห้องดนตรี, ห้องออกกำลังกาย, คาราโอเกะ</li>
                                    <li>บรรยากาศร่มรื่น เงียบสงบ แวดล้อมไปด้วยธรรมชาติ ไม่แออัด</li>
                                </ul>
                            </section>
                            
                        </div>
                        
                        {/* Right Column: Pricing and Call to Action */}
                        <aside className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-xl shadow-2xl sticky top-20 border-t-4 border-red-500">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">อัตราค่าบริการ (ต่อเดือน)</h3>
                                
                                <div className='text-3xl font-extrabold text-red-600 mb-4'>
                                    ฿{home.price.toLocaleString()}
                                </div>
                                
                                <ul className='text-sm text-gray-600 mb-6 space-y-2'>
                                    <li>**รูปแบบห้องพัก:** ห้องเดี่ยว (VIP), ห้องคู่, ห้องรวม (แยกชาย-หญิง)</li>
                                    <li>**ค่าใช้จ่ายรวม 20 ปี:** ประมาณ 4.32 ล้านบาท (อ้างอิงจากข้อมูล)</li>
                                </ul>

                                {/* Call to Action Button */}
                                <a 
                                    href={`/apply?homeId=${home.id}`} 
                                    className="w-full block text-center bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md transform hover:scale-[1.01]"
                                >
                                    สมัคร / นัดเยี่ยมชม 📅
                                </a>
                                
                                {/* Secondary Action */}
                                <a 
                                    href="#" 
                                    className="w-full block text-center mt-3 py-2 border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-50 transition"
                                >
                                    แชทสอบถาม 💬
                                </a>
                            </div>
                            
                            {/* Feature Checklist */}
                            <div className='mt-6 p-4 bg-white rounded-xl shadow-md'>
                                <h4 className='text-lg font-bold text-gray-700 mb-3'>คุณสมบัติหลัก</h4>
                                <ul className='space-y-2'>
                                    {features.map((f, index) => (
                                        <li key={index} className='flex justify-between items-center text-sm'>
                                            <span className='font-medium text-gray-600'>{f.icon} {f.label}</span>
                                            <span className='font-bold text-gray-800'>{f.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>

                    {/* Trust and Certification Section (Mock-up) */}
                    <div className="mt-10 p-6 bg-green-50 rounded-xl shadow-md border-2 border-green-300 text-center">
                        <h2 className="text-2xl font-bold text-green-800">✅ ความน่าเชื่อถือ</h2>
                        <p className="text-green-700 mt-2">
                            ที่พักนี้มีตรารับรองมาตรฐาน และเอกสารใบอนุญาตจาก สบส. / พม. ครบถ้วน
                        </p>
                        <p className="text-sm text-green-600 mt-1">
                            (อ้างอิงจากใบอนุญาตตาม พ.ร.บ. สถานประกอบการเพื่อสุขภาพ)
                        </p>
                    </div>

                </div>
            </main>
        </div>
    );
}

// Next.js: Fetching data for Dynamic Route
// ฟังก์ชันนี้จะดึงข้อมูลที่พักตาม id จาก URL
export async function getServerSideProps(context) {
    const { id } = context.params;
    const home = initialHomes.find(h => h.id.toString() === id);

    return {
        props: {
            home: home || null,
        },
    };
}
