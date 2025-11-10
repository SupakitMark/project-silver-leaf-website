// src/utils/data.js

export const careTypes = [
    { value: 'bedridden', label: 'ดูแลผู้ป่วยติดเตียง' },
    { value: 'dementia', label: 'ดูแลผู้ป่วยสมองเสื่อม' },
    { value: 'post-op', label: 'พักฟื้นหลังผ่าตัด' },
    { value: 'long-term', label: 'ดูแลระยะยาว' },
];

export const initialFilters = {
    maxBudget: 35000, // งบประมาณสูงสุดเริ่มต้น (35,000 บาท)
    careType: 'all',  // ประเภทการดูแลทั้งหมด
    hasRN: false,     // มีพยาบาลวิชาชีพ
    hasRamp: true,   // มีทางลาดวีลแชร์
};

export const initialHomes = [
    {
        id: 1,
        name: 'คุณตาคุณยาย เนอร์สซิ่งโฮม',
        location: 'นนทบุรี',
        rating: 4.8,
        reviews: 210,
        price: 24000, // ราคาต่อเดือน
        careTypes: ['bedridden', 'long-term'],
        hasRN: true,
        hasRamp: true,
        description: 'ศูนย์ดูแลผู้สูงอายุและผู้ป่วยพักฟื้น ครอบคลุมผู้ป่วยติดเตียง ดูแล 24 ชม. ด้วยทีมงานมืออาชีพ',
        image: '/images/home-1.jpg',
    },
    {
        id: 2,
        name: 'สุขสบายแคร์ พรีเมี่ยม',
        location: 'เชียงใหม่',
        rating: 4.5,
        reviews: 120,
        price: 18000,
        careTypes: ['dementia', 'long-term'],
        hasRN: false,
        hasRamp: true,
        description: 'บ้านพักบรรยากาศร่มรื่น เน้นกิจกรรมบำบัดและดูแลผู้สูงอายุที่สามารถช่วยเหลือตัวเองได้บางส่วน',
        image: '/images/home-2.jpg',
    },
    {
        id: 3,
        name: 'บำบัดใจ เนอร์สซิ่งแคร์',
        location: 'กรุงเทพฯ',
        rating: 4.9,
        reviews: 350,
        price: 45000,
        careTypes: ['bedridden', 'post-op', 'dementia'],
        hasRN: true,
        hasRamp: true,
        description: 'เน้นการดูแลผู้ป่วยติดเตียงและหลังผ่าตัดอย่างเข้มข้น ใกล้โรงพยาบาลใหญ่',
        image: '/images/home-3.jpg',
    },
    {
        id: 4,
        name: 'บ้านสุขสันต์ยามเย็น',
        location: 'ชลบุรี',
        rating: 4.2,
        reviews: 88,
        price: 15000,
        careTypes: ['long-term'],
        hasRN: false,
        hasRamp: true,
        description: 'บ้านพักระยะยาวราคาประหยัด เน้นการดูแลแบบเป็นกันเองและกิจกรรมกลุ่ม',
        image: '/images/home-4.jpg',
    },
    {
        id: 5,
        name: 'ศูนย์ฟื้นฟู สุขภาพดี',
        location: 'นนทบุรี',
        rating: 4.6,
        reviews: 95,
        price: 32000,
        careTypes: ['post-op'],
        hasRN: true,
        hasRamp: true,
        description: 'เชี่ยวชาญด้านการทำกายภาพบำบัดและพักฟื้นหลังการรักษา',
        image: '/images/home-5.jpg',
    },
];
