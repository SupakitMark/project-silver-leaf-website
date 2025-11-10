// src/pages/index.js

import { useState, useMemo } from 'react';
import HomeCard from '../components/HomeCard';
import { initialHomes, initialFilters, careTypes } from '../utils/data'; // นำเข้าข้อมูล

// --- The Main Page Component: Search and Listing ---
export default function HomePage() {
  const [filters, setFilters] = useState(initialFilters);
  const [searchText, setSearchText] = useState('');

  // Handle changes in the filter form
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      // ถ้าเป็น Checkbox ให้ใช้ 'checked' ไม่อย่างนั้นใช้ 'value'
      [name]: type === 'checkbox' ? checked : (type === 'range' ? parseInt(value) : value), 
    }));
  };

  // Logic การกรองข้อมูล (จะทำงานใหม่เมื่อ filters หรือ searchText เปลี่ยน)
  const filteredHomes = useMemo(() => {
    return initialHomes.filter(home => {
      // 1. Filter by Search Text (Location/Name)
      const matchesSearch = 
        home.name.toLowerCase().includes(searchText.toLowerCase()) ||
        home.location.toLowerCase().includes(searchText.toLowerCase());

      if (!matchesSearch) return false;

      // 2. Filter by Budget
      if (home.price > filters.maxBudget) return false;

      // 3. Filter by Care Type (ถ้าเลือก 'all' ก็ผ่าน)
      if (filters.careType !== 'all' && !home.careTypes.includes(filters.careType)) return false;

      // 4. Filter by Personnel (พยาบาลวิชาชีพ)
      if (filters.hasRN && !home.hasRN) return false;

      // 5. Filter by Facilities (ทางลาดวีลแชร์)
      if (filters.hasRamp && !home.hasRamp) return false;

      return true; // ตรงตามเงื่อนไขทั้งหมด
    });
  }, [filters, searchText]);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* -------------------- Navbar (Mock-up) -------------------- */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Home Finder</div>
            <div className="space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">สำหรับเจ้าของบ้านพัก</a>
                <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">เข้าสู่ระบบ</a>
            </div>
        </div>
      </nav>

      {/* -------------------- Header and Search Input -------------------- */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            หาบ้านพักคนชราที่เหมาะ... ง่าย ปลอดภัย โปร่งใส
          </h1>
          <p className="mt-3 text-xl opacity-90">
            ค้นหา เปรียบเทียบ และสมัครเข้าพักได้ในที่เดียว
          </p>
          
          {/* Main Search Input: Location and Name */}
          <div className="mt-8 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="🔍 ค้นหาจังหวัดหรือชื่อที่พัก..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full p-4 rounded-lg text-gray-800 shadow-xl focus:ring-4 focus:ring-blue-300 transition outline-none"
            />
          </div>
        </div>
      </header>

      {/* -------------------- Main Content: Filters and Listings -------------------- */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Filter Sidebar (Fixed Position) */}
          <aside className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-20 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-700">
                ตัวกรองละเอียด
            </h2>
            <form>
              {/* 1. Budget Filter */}
              <div className="mb-6">
                <label className="block text-base font-semibold text-gray-700 mb-2">💰 งบประมาณสูงสุด</label>
                <input
                  type="range"
                  name="maxBudget"
                  min="10000"
                  max="50000"
                  step="5000"
                  value={filters.maxBudget}
                  onChange={handleFilterChange}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer range-lg transition"
                />
                <p className="text-lg font-extrabold text-blue-600 mt-2">
                    {filters.maxBudget.toLocaleString()} บาท
                </p>
              </div>

              {/* 2. Care Type Filter */}
              <div className="mb-6 border-t pt-4">
                <label htmlFor="careType" className="block text-base font-semibold text-gray-700 mb-2">🩺 ประเภทการดูแล</label>
                <select 
                  id="careType" 
                  name="careType"
                  value={filters.careType}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="all">-- ทุกประเภทการดูแล --</option>
                  {careTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* 3. Personnel/Facilities Checkboxes */}
              <div className="space-y-4 pt-4 border-t">
                <label className="block text-base font-semibold text-gray-700">✅ เงื่อนไขพิเศษ</label>
                
                {/* Checkbox: มีพยาบาลวิชาชีพ */}
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input id="hasRN" name="hasRN" type="checkbox" checked={filters.hasRN} onChange={handleFilterChange} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="hasRN" className="font-medium text-gray-700 cursor-pointer">มีพยาบาลวิชาชีพ (RN/PN) ตลอด 24 ชม.</label>
                  </div>
                </div>
                
                {/* Checkbox: มีทางลาดวีลแชร์ */}
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input id="hasRamp" name="hasRamp" type="checkbox" checked={filters.hasRamp} onChange={handleFilterChange} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="hasRamp" className="font-medium text-gray-700 cursor-pointer">มีทางลาดวีลแชร์/สิ่งอำนวยความสะดวกครบ</label>
                  </div>
                </div>
                
              </div>
            </form>
          </aside>

          {/* Column 2: Search Results */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                🏠 พบ **{filteredHomes.length}** บ้านพักที่ตรงกับเงื่อนไข
            </h2>

            {filteredHomes.length > 0 ? (
              <div className="space-y-6">
                {filteredHomes.map(home => (
                  <HomeCard key={home.id} home={home} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white border-2 border-dashed border-gray-300 rounded-xl text-gray-600">
                <p className='text-2xl font-bold mb-2'>ไม่พบบ้านพัก</p>
                <p>โปรดลองเปลี่ยนเงื่อนไขการค้นหาหรือตัวกรอง</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* -------------------- Footer / CTA -------------------- */}
      <footer className="bg-gray-800 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white">สำหรับเจ้าของบ้านพักคุณภาพ</h3>
            <p className="mt-2 text-gray-400">ต้องการลงทะเบียนบ้านพักของคุณเพื่อเข้าถึงครอบครัวที่กำลังมองหาสถานที่ดูแลใช่หรือไม่?</p>
            <a href="/register-home" className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl transform hover:scale-105">
                ลงทะเบียนบ้านพัก 🌟
            </a>
        </div>
      </footer>
    </div>
  );
}
