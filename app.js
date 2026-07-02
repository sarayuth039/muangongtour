// Default service rates
const DEFAULT_RATES = {
  fuelRate: 15,
  dayRate: 3000,
  overnightRate: 2000
};

// Default Contact details
const DEFAULT_CONTACT = {
  phone: "081-8805804",
  facebookName: "เมืองโอ่งทัวร์",
  facebookUrl: "https://www.facebook.com/profile.php?id=100072559092496",
  address: "อำเภอเมืองราชบุรี จังหวัดราชบุรี 70000",
  mapQuery: "เมืองโอ่งทัวร์ ราชบุรี"
};

// Default Bus Data
const DEFAULT_BUSES = [
  {
    id: "decker",
    title: "Luxury Double Decker (รถ 2 ชั้น)",
    brand: "Scania / Volvo",
    seats: "50 ที่นั่ง",
    engine: "Scania K410IB 410 แรงม้า หรือเทียบเท่า (Euro 5)",
    description: "รถบัสปรับอากาศสองชั้นระดับพรีเมียม เบาะนั่ง VIP กว้างขวาง มีช่องชาร์จ USB ทุกที่นั่ง ระบบเครื่องเสียงคาราโอเกะเต็มพิกัด และห้องสุขาอเนกประสงค์ เหมาะสำหรับการสัมมนา ท่องเที่ยวบริษัท หรือทัศนศึกษาขนาดใหญ่",
    image: "assets/bus_decker.jpg"
  },
  {
    id: "coach",
    title: "Luxury Single Coach (รถบัสชั้นเดียว)",
    brand: "Hino / Mercedes-Benz",
    seats: "30-40 ที่นั่ง",
    engine: "Hino JO8E 380 แรงม้า คอมมอนเรล เทอร์โบอินเตอร์คูลเลอร์",
    description: "รถบัสชั้นระดับหรูหราที่ให้ความปลอดภัยสูงมาก เบาะปรับเอนได้สบาย ระบบปรับอากาศทั่วถึง พร้อมเครื่องเสียงไมโครโฟนคาราโอเกะ และทีวีขนาดใหญ่ เหมาะกับกรุ๊ปทัวร์ขนาดกลาง การพาคณะผู้แทนไปดูงานนอกสถานที่",
    image: "assets/bus_coach.jpg"
  },
  {
    id: "micro",
    title: "Luxury Micro Bus (มินิบัส VIP)",
    brand: "Toyota Coaster",
    seats: "20 ที่นั่ง",
    engine: "Toyota NO4C-VB 136 แรงม้า แรงบิดสูงและประหยัดน้ำมัน",
    description: "มินิบัสหรูหรานำเข้า ขนาดพอเหมาะสำหรับคณะเดินทางขนาดเล็กที่ต้องการความคล่องตัวสูง เข้าซอยแคบหรือทางขึ้นดอยได้สะดวก นั่งสบาย ทัศนวิสัยดีเยี่ยม เหมาะกับทริปครอบครัวขนาดใหญ่หรือทีมผู้บริหาร",
    image: "assets/bus_micro.jpg"
  }
];

// Default Portfolio Data (Contains 10 items to showcase the pagination/Show More button)
const DEFAULT_PORTFOLIO = [
  {
    id: "port-1",
    title: "ทริป CSR คณะพนักงานบริษัท SCG แพร่-กาญจนบุรี",
    type: "สัมมนา & CSR บริษัท",
    date: "2026-06-15",
    description: "ให้บริการนำเที่ยวและจัดกิจกรรมเพื่อสังคม (CSR) ของทาง SCG จำนวน 2 คันรถบัส 2 ชั้น ดูแลการเดินทางตลอด 3 วัน 2 คืน ไปกลับจังหวัดราชบุรี-กาญจนบุรีอย่างราบรื่นและอบอุ่น",
    image: "assets/portfolio1.jpg"
  },
  {
    id: "port-2",
    title: "ท่องเที่ยวประจำปี สหกรณ์ออมทรัพย์ จังหวัดราชบุรี",
    type: "ท่องเที่ยวประจำปี",
    date: "2026-04-10",
    description: "พาสมาชิกสหกรณ์ท่องเที่ยวชายทะเลชะอำ-หัวหิน จัดมินิบัส VIP และรถบัสชั้นเดียวนิรภัย สะดวกสบายเป็นกันเอง สนุกสนานกับระบบคาราโอเกะระดับพรีเมียมบนรถตลอดเส้นทาง",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "port-3",
    title: "ทัศนศึกษานักเรียน โรงเรียนสายธรรม ราชบุรี",
    type: "ทัศนศึกษาโรงเรียน",
    date: "2026-01-20",
    description: "นำคณะครูและนักเรียนกว่า 150 ท่าน ทัศนศึกษา ณ พิพิธภัณฑสถานแห่งชาติ กรุงเทพมหานคร ด้วยขบวนรถบัส 2 ชั้น 3 คัน เพียบพร้อมด้วยอุปกรณ์ความปลอดภัยครบครัน เข็มขัดนิรภัยทุกที่นั่ง",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "port-4",
    title: "ทริปทำบุญไหว้พระ 9 วัด จังหวัดพระนครศรีอยุธยา คณะชุมชนเขากระปุก",
    type: "ทริปทำบุญไหว้พระ",
    date: "2026-05-12",
    description: "เดินทางไหว้พระขอพรเสริมสิริมงคล ณ วัดใหญ่ชัยมงคล วัดพนัญเชิง และวัดพระศรีสรรเพชญ์ ด้วยความเลื่อมใสศรัทธา เดินทางปลอดภัยเป็นหมู่คณะ",
    image: "https://images.unsplash.com/photo-1608958415217-1f4864fa91be?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "port-5",
    title: "บริการรถบัสนำเที่ยว งานมงคลสมรส คณะญาติเจ้าบ่าว ชะอำ-เพชรบุรี",
    type: "งานพิธีมงคลสมรส",
    date: "2026-03-25",
    description: "รับส่งคณะญาติผู้ใหญ่ร่วมงานแต่งงานริมหาดชะอำ อำนวยความสะดวกสบายตลอดเส้นทางด้วยเบาะ VIP สภาพดีเยี่ยม พนักงานขับแต่งกายสุภาพบริการประทับใจ",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "port-6",
    title: "สัมมนาดูงานเทคโนโลยีพลังงานสะอาด คณะ อบต.เจดีย์หัก",
    type: "ศึกษาดูงานหน่วยงาน",
    date: "2026-02-18",
    description: "เดินทางทัศนศึกษาดูงานโครงการโรงไฟฟ้าพลังงานแสงอาทิตย์ เดินทางด้วยความปลอดภัยและรักษาเวลาได้ตามกำหนดการของทางราชการอย่างเคร่งครัด",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "port-7",
    title: "รับส่งนักศึกษาฝึกงาน คณะพยาบาลศาสตร์ มหาวิทยาลัยราชบุรี",
    type: "รับส่งบุคลากร/นักศึกษา",
    date: "2025-12-10",
    description: "บริการรับส่งคณะนักศึกษาฝึกงานพยาบาลไปปฏิบัติหน้าที่ ณ โรงพยาบาลศูนย์ราชบุรี ทุกวันทำการ เดินทางปลอดภัยและรักษาเวลาอย่างมืออาชีพ",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "port-8",
    title: "ทริปสัมมนากลุ่มงานวิจัย สถาบันวิจัยการเกษตร ณ อำเภอหัวหิน",
    type: "สัมมนา & ท่องเที่ยว",
    date: "2025-11-05",
    description: "บริการรถบัสปรับอากาศ VIP นำคณะนักวิจัยประชุมสัมมนาประจำปี ณ โรงแรมริมหาดหัวหิน พักผ่อนและระดมสมองอย่างมีความสุขตลอด 3 วัน 2 คืน",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "port-9",
    title: "ศึกษาดูงานประวัติศาสตร์ทวารวดี คณะครูเทศบาลเมืองโอ่ง",
    type: "ศึกษาดูงานหน่วยงาน",
    date: "2025-10-14",
    description: "พาคณะผู้บริหารและครูโรงเรียนในสังกัดเทศบาลเมืองโอ่ง ศึกษาเรียนรู้ประวัติศาสตร์ท้องถิ่นโบราณสถานราชบุรี-นครปฐม สนุกสนานและได้ความรู้เต็มเปี่ยม",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "port-10",
    title: "ทัวร์ครอบครัวสัมพันธ์ ท่องเที่ยวน้ำตกไทรโยคน้อย จังหวัดกาญจนบุรี",
    type: "ท่องเที่ยวครอบครัว",
    date: "2025-09-02",
    description: "จัดมินิบัส VIP Toyota Coaster ขนาด 20 ที่นั่ง พาสมาชิกครอบครัวขนาดใหญ่เดินทางพักผ่อนเล่นน้ำตกไทรโยคน้อย คล่องตัวสูง เดินทางเป็นส่วนตัวและเป็นกันเอง",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
  }
];

// Default Attractions Data
const DEFAULT_ATTRACTIONS = [
  {
    id: "attr-1",
    title: "อุทยานหินเขางู",
    province: "ratchaburi",
    description: "แลนด์มาร์กสุดอันซีนที่มีวิวทิวทัศน์ของหุบเขาหินปูนสะท้อนบนผืนน้ำขนาดใหญ่ มีสะพานแขวนให้นักท่องเที่ยวเดินเล่นรับลมชมวิวถ่ายรูปได้อย่างงดงาม คล่องตัวในการนำรถทัวร์ขนาดใหญ่เข้าจอด",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "attr-2",
    title: "ตลาดน้ำดำเนินสะดวก",
    province: "ratchaburi",
    description: "ตลาดน้ำที่เก่าแก่และมีชื่อเสียงระดับโลก คลาคล่ำไปด้วยเรือพายจำหน่ายผลไม้ อาหารเมือง ของฝากมากมาย เหมาะสำหรับกรุ๊ปทัวร์ทั้งชาวไทยและต่างชาติที่ต้องการสัมผัสวิถีชีวิตไทยแท้",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "attr-3",
    title: "สะพานข้ามแม่น้ำแคว",
    province: "kanchanaburi",
    description: "สัญลักษณ์ทางประวัติศาสตร์สมัยสงครามโลกครั้งที่ 2 เป็นสะพานรถไฟที่ทอดตัวข้ามแม่น้ำแควใหญ่อย่างสวยงาม มีร้านค้า ของฝาก และร้านอาหารริมน้ำรองรับกรุ๊ปสัมมนาขนาดใหญ่ได้เป็นอย่างดี",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "attr-4",
    title: "น้ำตกเอราวัณ",
    province: "kanchanaburi",
    description: "น้ำตก 7 ชั้นที่สวยงามและมีชื่อเสียงที่สุดแห่งหนึ่ง น้ำใสสะอาดจนเห็นตัวปลาพวงแหวกว่าย ท่ามกลางป่าร่มรื่น เหมาะสำหรับการพาทัวร์แนวพักผ่อนหย่อนใจ ผจญภัยธรรมชาติเบาๆ",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "attr-5",
    title: "พระนครคีรี (เขาวัง)",
    province: "phetchaburi",
    description: "โบราณสถานเก่าแก่คู่บ้านคู่เมืองเพชรบุรี ตั้งตระหง่านอยู่บนยอดเขาสามยอด มีพระที่นั่ง พระธาตุ เจดีย์ต่างๆ สถาปัตยกรรมตะวันตกผสมผสานไทยจีน สามารถนั่งรถรางไฟฟ้าขึ้นไปชมวิวได้",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "attr-6",
    title: "หาดชะอำ",
    province: "phetchaburi",
    description: "ชายหาดยอดนิยมตลอดกาล ยาวสุดลูกหูลูกตา ลมพัดเย็นสบาย เพลิดเพลินกับอาหารทะเลสดๆ กิจกรรมปั่นจักรยานริมเล กล้วยเรือ (Banana Boat) เหมาะกับกรุ๊ปทริปที่ต้องการความผ่อนคลายริมทะเล",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  }
];

// Global App State
let appData = {
  rates: { ...DEFAULT_RATES },
  contact: { ...DEFAULT_CONTACT },
  buses: [],
  portfolio: [],
  attractions: [],
  isAdmin: false,
  activeProvinceFilter: 'all',
  showAllPortfolio: false // show only first 9 portfolio items by default
};

// SVG Icon Helpers
const SVG_ICONS = {
  edit: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>`,
  delete: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>`
};

// Sync latest state to localStorage (Local fallback backup)
function syncLocalStorage() {
  localStorage.setItem('mot_rates', JSON.stringify(appData.rates));
  localStorage.setItem('mot_contact', JSON.stringify(appData.contact));
  localStorage.setItem('mot_buses', JSON.stringify(appData.buses));
  localStorage.setItem('mot_portfolio', JSON.stringify(appData.portfolio));
  localStorage.setItem('mot_attractions', JSON.stringify(appData.attractions));
}

// Persist rates, buses, portfolio, attractions to Cloud Database (or Local fallback if localhost)
async function persistState() {
  syncLocalStorage();
  
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  if (!isLocal) {
    try {
      const payload = {
        rates: appData.rates,
        contact: appData.contact,
        buses: appData.buses,
        portfolio: appData.portfolio,
        attractions: appData.attractions
      };
      
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 1234'
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        let errMsg = response.statusText;
        try {
          const err = await response.json();
          errMsg = err.error || errMsg;
        } catch(e) {}
        console.error("Cloud DB write failed:", errMsg);
        alert("⚠️ แจ้งเตือน: ไม่สามารถบันทึกข้อมูลลง Cloudflare ได้ (" + errMsg + ")\nกรุณาตรวจการตั้งค่า KV Binding หรือทำตามคู่มือ setup");
      } else {
        console.log("Cloud Database updated successfully!");
      }
    } catch (e) {
      console.error("Network error writing to Cloud database:", e);
      alert("⚠️ แจ้งเตือน: เกิดข้อผิดพลาดทางเครือข่าย ไม่สามารถเชื่อมต่อกับ Cloudflare API ได้\nกรุณาตรวจสอบว่ามีอินเทอร์เน็ต และตั้งค่า KV ในแดชบอร์ดถูกต้อง");
    }
  }
}

// Force upload current local browser data up to Cloud KV Database
async function forceCloudSync() {
  const confirmSync = confirm("คุณต้องการอัปโหลดข้อมูลทั้งหมดในเครื่องคอมพิวเตอร์ปัจจุบันขึ้นไปเก็บบน Cloud (Cloudflare) หรือไม่?\nข้อมูลเก่าบนคลาวด์จะถูกเขียนทับด้วยข้อมูลในเครื่องนี้ทั้งหมด");
  if (!confirmSync) return;
  
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  if (isLocal) {
    alert("⚠️ ไม่สามารถบันทึกขึ้นคลาวด์ได้ขณะรันบน localhost\nกรุณาเปิดหน้าเว็บจริง https://muang-ong-tour.com แล้วกดปุ่มซิงค์จากเครื่องที่มีรูปภาพของคุณครับ");
    return;
  }
  
  try {
    await persistState();
    alert("☁️ ซิงค์ข้อมูลขึ้นคลาวด์สำเร็จแล้ว! เครื่องอื่นและโทรศัพท์มือถือที่เข้าลิงก์นี้จะมองเห็นรูปภาพและราคาล่าสุดเหมือนกันทันทีครับ");
  } catch (e) {
    alert("เกิดข้อผิดพลาดในการซิงค์ข้อมูล: " + e.message);
  }
}

// Initialize Application Data (Fetches from cloud if on production, else falls back to LocalStorage)
async function initApp() {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  let loadedData = null;
  
  if (!isLocal) {
    try {
      const response = await fetch('/api/data');
      if (response.ok) {
        const json = await response.json();
        if (json && !json.empty && !json.error) {
          loadedData = json;
          console.log("Cloud Database loaded successfully!");
        }
      }
    } catch (e) {
      console.warn("Failed to load Cloud Database. Falling back to LocalStorage.", e);
    }
  }
  
  // 1. Rates Loading
  if (loadedData && loadedData.rates) {
    appData.rates = loadedData.rates;
  } else {
    const storedRates = localStorage.getItem('mot_rates');
    if (storedRates) {
      try { appData.rates = JSON.parse(storedRates); } catch (e) { appData.rates = { ...DEFAULT_RATES }; }
    } else {
      appData.rates = { ...DEFAULT_RATES };
    }
  }
  updateDisplayedRates();

  // 2. Contact Loading
  if (loadedData && loadedData.contact) {
    appData.contact = loadedData.contact;
  } else {
    const storedContact = localStorage.getItem('mot_contact');
    if (storedContact) {
      try { appData.contact = JSON.parse(storedContact); } catch (e) { appData.contact = { ...DEFAULT_CONTACT }; }
    } else {
      appData.contact = { ...DEFAULT_CONTACT };
    }
  }
  renderContactInfo();

  // 3. Buses Loading
  if (loadedData && loadedData.buses) {
    appData.buses = loadedData.buses;
  } else {
    const storedBuses = localStorage.getItem('mot_buses');
    if (storedBuses) {
      try { appData.buses = JSON.parse(storedBuses); } catch (e) { appData.buses = [...DEFAULT_BUSES]; }
    } else {
      appData.buses = [...DEFAULT_BUSES];
    }
  }

  // 4. Portfolio Loading
  if (loadedData && loadedData.portfolio) {
    appData.portfolio = loadedData.portfolio;
  } else {
    const storedPortfolio = localStorage.getItem('mot_portfolio');
    if (storedPortfolio) {
      try { appData.portfolio = JSON.parse(storedPortfolio); } catch (e) { appData.portfolio = [...DEFAULT_PORTFOLIO]; }
    } else {
      appData.portfolio = [...DEFAULT_PORTFOLIO];
    }
  }

  // 5. Attractions Loading
  if (loadedData && loadedData.attractions) {
    appData.attractions = loadedData.attractions;
  } else {
    const storedAttractions = localStorage.getItem('mot_attractions');
    if (storedAttractions) {
      try { appData.attractions = JSON.parse(storedAttractions); } catch (e) { appData.attractions = [...DEFAULT_ATTRACTIONS]; }
    } else {
      appData.attractions = [...DEFAULT_ATTRACTIONS];
    }
  }

  // Save changes locally to align fallback database
  syncLocalStorage();

  // 6. Check Admin Session State
  const sessionAdmin = sessionStorage.getItem('mot_admin_logged_in');
  setAdminState(sessionAdmin === 'true');
}

// Update UI displays for rates and populate inputs in admin form
function updateDisplayedRates() {
  const fuelRateEl = document.getElementById('display-fuel-rate');
  const dayRateEl = document.getElementById('display-day-rate');
  const overnightRateEl = document.getElementById('display-overnight-rate');
  
  if (fuelRateEl) fuelRateEl.textContent = appData.rates.fuelRate;
  if (dayRateEl) dayRateEl.textContent = formatNumber(appData.rates.dayRate);
  if (overnightRateEl) overnightRateEl.textContent = formatNumber(appData.rates.overnightRate);
  
  const adminFuelInput = document.getElementById('admin-fuel-rate');
  const adminDayInput = document.getElementById('admin-day-rate');
  const adminNightInput = document.getElementById('admin-overnight-rate');
  
  if (adminFuelInput) adminFuelInput.value = appData.rates.fuelRate;
  if (adminDayInput) adminDayInput.value = appData.rates.dayRate;
  if (adminNightInput) adminNightInput.value = appData.rates.overnightRate;
}

// Render the contact information dynamically onto the index page
function renderContactInfo() {
  const phoneText = document.getElementById('contact-phone-text');
  const phoneLink = document.getElementById('contact-phone-link');
  const fbText = document.getElementById('contact-fb-text');
  const fbLink = document.getElementById('contact-fb-link');
  const addressText = document.getElementById('contact-address-text');
  const mapIframe = document.getElementById('contact-map-iframe');
  
  if (phoneText) phoneText.textContent = appData.contact.phone;
  if (phoneLink) {
    phoneLink.href = `tel:${appData.contact.phone.replace(/[^0-9]/g, '')}`;
  }
  if (fbText) fbText.textContent = appData.contact.facebookName;
  if (fbLink) fbLink.href = appData.contact.facebookUrl;
  if (addressText) addressText.textContent = appData.contact.address;
  if (mapIframe) {
    mapIframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(appData.contact.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  }

  // Pre-fill Admin form values as well
  const adminPhone = document.getElementById('admin-contact-phone');
  const adminFbName = document.getElementById('admin-contact-fb-name');
  const adminFbLink = document.getElementById('admin-contact-fb-link');
  const adminAddress = document.getElementById('admin-contact-address');
  const adminMapQuery = document.getElementById('admin-contact-map-query');

  if (adminPhone) adminPhone.value = appData.contact.phone;
  if (adminFbName) adminFbName.value = appData.contact.facebookName;
  if (adminFbLink) adminFbLink.value = appData.contact.facebookUrl;
  if (adminAddress) adminAddress.value = appData.contact.address;
  if (adminMapQuery) adminMapQuery.value = appData.contact.mapQuery;
}

// Format numbers with commas
function formatNumber(num) {
  return new Intl.NumberFormat('th-TH').format(num);
}

// Format date into Thai representation
function formatThaiDate(dateStr) {
  if (!dateStr) return '';
  if (isNaN(Date.parse(dateStr)) && dateStr.trim().includes(' ')) {
    return dateStr;
  }
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  
  const months = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];
  
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear() + 543; // BE year
  return `${day} ${month} ${year}`;
}

// Safe date parsing helper to enable robust sorting of free-form and ISO dates
function getSafeDateTime(dateStr) {
  if (!dateStr) return 0;
  
  const parsed = Date.parse(dateStr);
  if (!isNaN(parsed)) return parsed;
  
  const thMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  const thFullMonths = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  
  try {
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length >= 2) {
      let day = 1;
      let monthIndex = 0;
      let year = 2026;
      
      if (parts.length === 2) {
        const m = parts[0];
        const y = parseInt(parts[1]);
        monthIndex = thFullMonths.findIndex(name => name.includes(m));
        if (monthIndex === -1) monthIndex = thMonths.findIndex(name => name.includes(m));
        if (monthIndex === -1) monthIndex = 0;
        year = y - 543;
      } else if (parts.length === 3) {
        day = parseInt(parts[0]);
        const m = parts[1];
        const y = parseInt(parts[2]);
        monthIndex = thFullMonths.findIndex(name => name.includes(m));
        if (monthIndex === -1) monthIndex = thMonths.findIndex(name => name.includes(m));
        if (monthIndex === -1) monthIndex = 0;
        year = y - 543;
      }
      return new Date(year, monthIndex, day).getTime();
    }
  } catch (e) {
    console.error("Error parsing date: " + dateStr, e);
  }
  return 0;
}

// Calculate costs based on customer input
function calculateCost(event) {
  if (event) event.preventDefault();
  
  const distanceInput = document.getElementById('calc-distance');
  const daysInput = document.getElementById('calc-days');
  const nightsInput = document.getElementById('calc-nights');
  
  const distance = parseFloat(distanceInput.value) || 0;
  const days = parseFloat(daysInput.value) || 0;
  const nights = parseFloat(nightsInput.value) || 0;
  
  if (distance < 0 || days < 0 || nights < 0) {
    alert("กรุณากรอกข้อมูลตัวเลขที่มากกว่าหรือเท่ากับ 0");
    return;
  }
  
  const fuelCost = distance * appData.rates.fuelRate;
  const operationCost = days * appData.rates.dayRate;
  const overnightCost = nights * appData.rates.overnightRate;
  const totalCost = fuelCost + operationCost + overnightCost;
  
  document.getElementById('breakdown-fuel-val').textContent = formatNumber(fuelCost) + " บาท";
  document.getElementById('breakdown-day-val').textContent = formatNumber(operationCost) + " บาท";
  document.getElementById('breakdown-night-val').textContent = formatNumber(overnightCost) + " บาท";
  document.getElementById('result-total-value').textContent = formatNumber(totalCost);
  
  document.getElementById('breakdown-fuel-desc').textContent = `ค่าน้ำมัน (${formatNumber(distance)} กม. × ${appData.rates.fuelRate} บาท)`;
  document.getElementById('breakdown-day-desc').textContent = `ค่าดำเนินการ (${formatNumber(days)} วัน × ${formatNumber(appData.rates.dayRate)} บาท)`;
  document.getElementById('breakdown-night-desc').textContent = `ค่าพักค้างคืน (${formatNumber(nights)} คืน × ${formatNumber(appData.rates.overnightRate)} บาท)`;
}

/* ==========================================================================
   ADMIN AUTHENTICATION & CMS MANAGEMENT
   ========================================================================== */

// Open admin settings modal
function openAdminSettings() {
  if (appData.isAdmin) {
    resetAdminModal();
    document.getElementById('admin-auth-section').style.display = 'none';
    document.getElementById('admin-settings-section').style.display = 'block';
    openModal('admin-modal');
  } else {
    resetAdminModal();
    openModal('admin-modal');
  }
}

// Log in as Admin
function authenticateAdmin(event) {
  if (event) event.preventDefault();
  
  const passwordInput = document.getElementById('admin-password');
  const errorMsg = document.getElementById('auth-error-msg');
  
  if (passwordInput.value === '1234') {
    errorMsg.style.display = 'none';
    passwordInput.value = '';
    
    sessionStorage.setItem('mot_admin_logged_in', 'true');
    setAdminState(true);
    closeModal('admin-modal');
    
    alert("ลงชื่อเข้าสู่โหมดผู้ดูแลระบบเสร็จสิ้น!");
  } else {
    errorMsg.style.display = 'block';
    passwordInput.select();
  }
}

// Log out Admin
function logoutAdmin() {
  sessionStorage.removeItem('mot_admin_logged_in');
  setAdminState(false);
  alert("ออกจากระบบผู้ดูแลระบบเรียบร้อยแล้ว");
}

// Update UI display classes based on admin state
function setAdminState(isAdminActive) {
  appData.isAdmin = isAdminActive;
  
  const body = document.body;
  const navAdminBtn = document.getElementById('nav-admin-btn');
  
  if (isAdminActive) {
    body.classList.add('admin-active');
    if (navAdminBtn) {
      navAdminBtn.innerHTML = '🔒 ออกจากแอดมิน';
      navAdminBtn.setAttribute('onclick', 'logoutAdmin(); return false;');
    }
  } else {
    body.classList.remove('admin-active');
    if (navAdminBtn) {
      navAdminBtn.innerHTML = '🔓 สำหรับแอดมิน';
      navAdminBtn.setAttribute('onclick', 'openAdminSettings(); return false;');
    }
  }
  
  renderBuses();
  renderPortfolio();
  renderAttractions();
}

// Save rates & contact channels edited by admin
async function saveAdminRates(event) {
  if (event) event.preventDefault();
  
  // Rates inputs
  const fuelVal = parseFloat(document.getElementById('admin-fuel-rate').value);
  const dayVal = parseFloat(document.getElementById('admin-day-rate').value);
  const nightVal = parseFloat(document.getElementById('admin-overnight-rate').value);
  
  // Contacts inputs
  const phone = document.getElementById('admin-contact-phone').value.trim();
  const fbName = document.getElementById('admin-contact-fb-name').value.trim();
  const fbLink = document.getElementById('admin-contact-fb-link').value.trim();
  const address = document.getElementById('admin-contact-address').value.trim();
  const mapQuery = document.getElementById('admin-contact-map-query').value.trim();
  
  if (isNaN(fuelVal) || isNaN(dayVal) || isNaN(nightVal) || fuelVal < 0 || dayVal < 0 || nightVal < 0) {
    alert("กรุณากรอกข้อมูลอัตราค่าบริการให้ถูกต้อง");
    return;
  }

  if (!phone || !fbName || !fbLink || !address || !mapQuery) {
    alert("กรุณากรอกข้อมูลการติดต่อให้ครบทุกช่อง");
    return;
  }
  
  // Save rates
  appData.rates.fuelRate = fuelVal;
  appData.rates.dayRate = dayVal;
  appData.rates.overnightRate = nightVal;
  
  // Save contact channels
  appData.contact = {
    phone,
    facebookName: fbName,
    facebookUrl: fbLink,
    address,
    mapQuery
  };

  updateDisplayedRates();
  renderContactInfo();
  calculateCost();
  
  // Sync state to Cloud / Local
  await persistState();
  
  closeModal('admin-modal');
  alert("บันทึกข้อมูลการตั้งค่าและช่องทางการติดต่อใหม่เรียบร้อยแล้ว!");
}

// Reset Admin Auth State
function resetAdminModal() {
  document.getElementById('admin-password').value = '';
  document.getElementById('auth-error-msg').style.display = 'none';
  document.getElementById('admin-auth-section').style.display = 'block';
  document.getElementById('admin-settings-section').style.display = 'none';
}

// General Modal Controller
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   DYNAMIC RENDERING ENGINE FOR FRONTEND SECTIONS
   ========================================================================== */

// Helper to render card overlays (Edit/Delete buttons) in Admin mode
function getAdminOverlayHtml(type, id) {
  return `
    <div class="admin-card-actions">
      <button class="admin-card-btn admin-card-btn-edit" onclick="openEditModal('${type}', '${id}')" title="แก้ไขข้อมูลคาร์ดนี้">
        ${SVG_ICONS.edit}
      </button>
      <button class="admin-card-btn admin-card-btn-delete" onclick="deleteItem('${type}', '${id}')" title="ลบข้อมูลคาร์ดนี้">
        ${SVG_ICONS.delete}
      </button>
    </div>
  `;
}

// 1. Render Buses
function renderBuses() {
  const grid = document.getElementById('bus-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  if (appData.buses.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted)">ไม่มีข้อมูลรถบัสในระบบ กดเพิ่มข้อมูลบัสใหม่ (ในโหมดแอดมิน)</div>';
    return;
  }
  
  appData.buses.forEach(bus => {
    const card = document.createElement('div');
    card.className = 'card-wrapper';
    
    let adminOverlay = appData.isAdmin ? getAdminOverlayHtml('bus', bus.id) : '';
    
    card.innerHTML = `
      ${adminOverlay}
      <div class="bus-card">
        <div class="bus-img-container">
          <img src="${bus.image}" alt="${bus.title}">
          <div class="bus-seats-tag">${bus.seats}</div>
        </div>
        <div class="bus-info">
          <div class="bus-info-top">
            <div class="bus-brand">${bus.brand}</div>
            <h3 class="bus-name">${bus.title}</h3>
            <div class="bus-quick-specs">
              <div class="spec-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>สเปกเช่าเหมา VIP</span>
              </div>
              <div class="spec-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>เทคโนโลยีสูง</span>
              </div>
            </div>
          </div>
          <button class="bus-view-btn" onclick="viewBusDetails('${bus.id}')">
            ดูรายละเอียดรถคันนี้
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// 2. Render Portfolio (Sorted by date descending, showing 9 items with load more)
function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  const toggleContainer = document.getElementById('portfolio-toggle-container');
  if (!grid) return;
  grid.innerHTML = '';
  if (toggleContainer) toggleContainer.innerHTML = '';
  
  if (appData.portfolio.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted)">ไม่มีข้อมูลประวัติผลงานในระบบ กดเพิ่มข้อมูลผลงาน (ในโหมดแอดมิน)</div>';
    return;
  }
  
  // Sort portfolio items by date descending using the safe time parser
  const sortedPortfolio = [...appData.portfolio].sort((a, b) => {
    return getSafeDateTime(b.date) - getSafeDateTime(a.date);
  });
  
  // Limit selection to 9 items unless toggle active
  const hasMoreThanLimit = sortedPortfolio.length > 9;
  const itemsToRender = appData.showAllPortfolio ? sortedPortfolio : sortedPortfolio.slice(0, 9);
  
  itemsToRender.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card-wrapper';
    
    let adminOverlay = appData.isAdmin ? getAdminOverlayHtml('portfolio', item.id) : '';
    
    // Convert YYYY-MM-DD or standard BE dates to pretty Thai text
    const displayDate = formatThaiDate(item.date);
    
    card.innerHTML = `
      ${adminOverlay}
      <div class="portfolio-card">
        <div class="portfolio-img-container">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="portfolio-info">
          <div class="portfolio-meta">
            <span>ประเภท: ${item.type}</span>
            <span>${displayDate}</span>
          </div>
          <h3 class="portfolio-title">${item.title}</h3>
          <p class="portfolio-desc">${item.description}</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Render Toggle Button if there are more than 9 items
  if (hasMoreThanLimit && toggleContainer) {
    const button = document.createElement('button');
    button.className = 'btn-outline-gold';
    
    if (appData.showAllPortfolio) {
      button.innerHTML = `
        แสดงน้อยลง
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      `;
      button.onclick = () => {
        appData.showAllPortfolio = false;
        renderPortfolio();
        // Smooth scroll back to portfolio section top
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
      };
    } else {
      const remainingCount = sortedPortfolio.length - 9;
      button.innerHTML = `
        ดูเพิ่มเติม (อีก ${remainingCount} รายการ)
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      `;
      button.onclick = () => {
        appData.showAllPortfolio = true;
        renderPortfolio();
      };
    }
    toggleContainer.appendChild(button);
  }
}

// 3. Render Attractions
function renderAttractions() {
  const grid = document.getElementById('attraction-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  const filtered = appData.attractions.filter(attr => {
    return appData.activeProvinceFilter === 'all' || attr.province === appData.activeProvinceFilter;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted)">ไม่มีสถานที่แนะนำสำหรับจังหวัดนี้ในระบบ กดเพิ่มข้อมูลที่เที่ยว (ในโหมดแอดมิน)</div>';
    return;
  }
  
  filtered.forEach(attr => {
    const card = document.createElement('div');
    card.className = 'card-wrapper';
    
    let adminOverlay = appData.isAdmin ? getAdminOverlayHtml('attraction', attr.id) : '';
    
    const provinceLabels = {
      ratchaburi: "ราชบุรี",
      kanchanaburi: "กาญจนบุรี",
      phetchaburi: "เพชรบุรี"
    };
    const provName = provinceLabels[attr.province] || attr.province;
    
    card.innerHTML = `
      ${adminOverlay}
      <div class="attraction-card">
        <div class="attraction-img-container">
          <img src="${attr.image}" alt="${attr.title}">
          <span class="attraction-tag">${provName}</span>
        </div>
        <div class="attraction-info">
          <h3 class="attraction-title">${attr.title}</h3>
          <p class="attraction-desc">${attr.description}</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Open modal showing specific details of the bus
function viewBusDetails(busId) {
  const bus = appData.buses.find(b => b.id === busId);
  if (!bus) return;
  
  document.getElementById('modal-bus-img').src = bus.image;
  document.getElementById('modal-bus-title').textContent = bus.title;
  document.getElementById('modal-bus-desc').textContent = bus.description;
  
  document.getElementById('spec-val-seats').textContent = bus.seats;
  document.getElementById('spec-val-brand').textContent = bus.brand;
  document.getElementById('spec-val-engine').textContent = bus.engine;
  
  openModal('bus-details-modal');
}

// Filter tourism attractions by province tabs
function filterAttractions(province) {
  appData.activeProvinceFilter = province;
  
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-province') === province) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  renderAttractions();
}

/* ==========================================================================
   IMAGE COMPRESSION & FILE UPLOAD HANDLER
   ========================================================================== */

// Compress the uploaded image file client-side and convert to Base64 JPEG
function compressAndConvertToBase64(file, callback) {
  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;
      
      // Resize to a maximum of 800px width (preserving aspect ratio)
      const MAX_WIDTH = 800;
      if (width > MAX_WIDTH) {
        height = Math.round((height * MAX_WIDTH) / width);
        width = MAX_WIDTH;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      // Compress to JPEG with 70% quality
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
      callback(compressedDataUrl);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

// Clear selected file input and hide thumbnail preview
function clearSelectedFile() {
  const fileInput = document.getElementById('crud-field-file');
  const previewContainer = document.getElementById('crud-img-preview-container');
  const previewImg = document.getElementById('crud-img-preview');
  const hiddenInput = document.getElementById('crud-field-image');
  
  if (fileInput) fileInput.value = '';
  if (previewContainer) previewContainer.style.display = 'none';
  if (previewImg) previewImg.src = '';
  if (hiddenInput) hiddenInput.value = '';
}

/* ==========================================================================
   CRUD DATABASE INTERFACES (INSERT / UPDATE / DELETE)
   ========================================================================== */

// Open CRUD form modal for Adding new Item
function openAddModal(type) {
  document.getElementById('crud-item-type').value = type;
  document.getElementById('crud-item-id').value = '';
  
  const titles = {
    bus: "เพิ่มรถบัสคันใหม่ในอัลบั้ม",
    portfolio: "เพิ่มภาพผลงานประวัติลูกค้า",
    attraction: "เพิ่มแหล่งสถานที่แนะนำท่องเที่ยวใหม่"
  };
  document.getElementById('crud-modal-title').textContent = titles[type] || "เพิ่มข้อมูล";
  
  configureCrudFormFields(type);
  clearSelectedFile();
  
  document.getElementById('crud-field-title').value = '';
  document.getElementById('crud-field-desc').value = '';
  document.getElementById('crud-field-a').value = '';
  document.getElementById('crud-field-b').value = '';
  if (document.getElementById('crud-field-c')) {
    document.getElementById('crud-field-c').value = '';
  }
  
  openModal('crud-modal');
}

// Open CRUD form modal for Editing existing Item
function openEditModal(type, id) {
  let item = null;
  if (type === 'bus') item = appData.buses.find(b => b.id === id);
  else if (type === 'portfolio') item = appData.portfolio.find(p => p.id === id);
  else if (type === 'attraction') item = appData.attractions.find(a => a.id === id);
  
  if (!item) {
    alert("ไม่พบข้อมูลชิ้นนี้ในระบบ");
    return;
  }
  
  document.getElementById('crud-item-type').value = type;
  document.getElementById('crud-item-id').value = id;
  
  const titles = {
    bus: "แก้ไขรายละเอียดรถบัส",
    portfolio: "แก้ไขรายละเอียดประวัติผลงาน",
    attraction: "แก้ไขรายละเอียดสถานที่ท่องเที่ยว"
  };
  document.getElementById('crud-modal-title').textContent = titles[type] || "แก้ไขข้อมูล";
  
  configureCrudFormFields(type);
  clearSelectedFile();
  
  // Restore text fields
  document.getElementById('crud-field-title').value = item.title;
  document.getElementById('crud-field-desc').value = item.description;
  
  // Set existing image values
  document.getElementById('crud-field-image').value = item.image;
  const previewImg = document.getElementById('crud-img-preview');
  const previewContainer = document.getElementById('crud-img-preview-container');
  if (previewImg && previewContainer && item.image) {
    previewImg.src = item.image;
    previewContainer.style.display = 'block';
  }
  
  if (type === 'bus') {
    document.getElementById('crud-field-a').value = item.seats;
    document.getElementById('crud-field-b').value = item.brand;
    document.getElementById('crud-field-c').value = item.engine;
  } else if (type === 'portfolio') {
    document.getElementById('crud-field-a').value = item.date;
    document.getElementById('crud-field-b').value = item.type;
  } else if (type === 'attraction') {
    document.getElementById('crud-field-a').value = item.province;
  }
  
  openModal('crud-modal');
}

// Adjust label names and displays dynamically based on section type
function configureCrudFormFields(type) {
  const groupA = document.getElementById('crud-group-a');
  const groupB = document.getElementById('crud-group-b');
  const groupC = document.getElementById('crud-group-c');
  
  const labelA = document.getElementById('crud-label-a');
  const labelB = document.getElementById('crud-label-b');
  const labelC = document.getElementById('crud-label-c');
  
  groupA.style.display = 'block';
  groupB.style.display = 'block';
  groupC.style.display = 'block';
  
  if (type === 'bus') {
    document.getElementById('crud-label-title').textContent = "ชื่อรุ่น / ประเภทรถบัส";
    labelA.textContent = "จำนวนที่นั่ง (เช่น 50 ที่นั่ง)";
    labelB.textContent = "ยี่ห้อบอดี้/แชสซี (เช่น Scania / Volvo)";
    labelC.textContent = "ข้อมูลและรุ่นเครื่องยนต์ (เช่น K410IB 410 แรงม้า)";
    
    groupA.innerHTML = `<label class="form-label" for="crud-field-a" id="crud-label-a">${labelA.textContent}</label><input class="form-input" type="text" id="crud-field-a" required>`;
    groupB.innerHTML = `<label class="form-label" for="crud-field-b" id="crud-label-b">${labelB.textContent}</label><input class="form-input" type="text" id="crud-field-b" required>`;
  } 
  else if (type === 'portfolio') {
    document.getElementById('crud-label-title').textContent = "หัวข้อประวัติผลงานคณะ";
    labelA.textContent = "วันที่ออกเดินทางท่องเที่ยว";
    labelB.textContent = "ประเภทการเช่า (เช่น สัมมนาบริษัท / งานบุญ)";
    groupC.style.display = 'none';
    
    // Date picker is used for portfolio items to simplify input and sorting
    groupA.innerHTML = `<label class="form-label" for="crud-field-a" id="crud-label-a">${labelA.textContent}</label><input class="form-input" type="date" id="crud-field-a" required>`;
    groupB.innerHTML = `<label class="form-label" for="crud-field-b" id="crud-label-b">${labelB.textContent}</label><input class="form-input" type="text" id="crud-field-b" required>`;
  } 
  else if (type === 'attraction') {
    document.getElementById('crud-label-title').textContent = "ชื่อสถานที่แนะนำท่องเที่ยว";
    labelA.textContent = "ระบุจังหวัดท่องเที่ยว";
    groupB.style.display = 'none';
    groupC.style.display = 'none';
    
    groupA.innerHTML = `
      <label class="form-label" for="crud-field-a" id="crud-label-a">${labelA.textContent}</label>
      <select class="form-input" id="crud-field-a" required>
        <option value="ratchaburi">ราชบุรี (Ratchaburi)</option>
        <option value="kanchanaburi">กาญจนบุรี (Kanchanaburi)</option>
        <option value="phetchaburi">เพชรบุรี (Phetchaburi)</option>
      </select>
    `;
  }
}

// Save CRUD edits/additions
async function saveCrudItem(event) {
  if (event) event.preventDefault();
  
  const type = document.getElementById('crud-item-type').value;
  const id = document.getElementById('crud-item-id').value;
  
  const title = document.getElementById('crud-field-title').value.trim();
  const desc = document.getElementById('crud-field-desc').value.trim();
  const image = document.getElementById('crud-field-image').value.trim(); // Base64 data URL
  
  const fieldA = document.getElementById('crud-field-a').value.trim();
  const fieldBEl = document.getElementById('crud-field-b');
  const fieldCEl = document.getElementById('crud-field-c');
  const fieldB = fieldBEl ? fieldBEl.value.trim() : '';
  const fieldC = fieldCEl ? fieldCEl.value.trim() : '';
  
  if (!image) {
    alert("กรุณาเลือกไฟล์รูปภาพที่ต้องการแนบก่อนทำการบันทึก");
    return;
  }

  if (!title || !desc) {
    alert("กรุณากรอกข้อมูลหลักให้ครบถ้วน");
    return;
  }
  
  let item = {};
  if (type === 'bus') {
    item = {
      id: id || "bus_" + Date.now().toString(),
      title,
      description: desc,
      image,
      seats: fieldA,
      brand: fieldB,
      engine: fieldC
    };
  } else if (type === 'portfolio') {
    item = {
      id: id || "port_" + Date.now().toString(),
      title,
      description: desc,
      image,
      date: fieldA, // Store the ISO string YYYY-MM-DD
      type: fieldB
    };
  } else if (type === 'attraction') {
    item = {
      id: id || "attr_" + Date.now().toString(),
      title,
      description: desc,
      image,
      province: fieldA
    };
  }
  
  if (type === 'bus') {
    if (id) {
      const idx = appData.buses.findIndex(b => b.id === id);
      if (idx !== -1) appData.buses[idx] = item;
    } else {
      appData.buses.push(item);
    }
    renderBuses();
  } 
  else if (type === 'portfolio') {
    if (id) {
      const idx = appData.portfolio.findIndex(p => p.id === id);
      if (idx !== -1) appData.portfolio[idx] = item;
    } else {
      appData.portfolio.push(item);
    }
    renderPortfolio();
  } 
  else if (type === 'attraction') {
    if (id) {
      const idx = appData.attractions.findIndex(a => a.id === id);
      if (idx !== -1) appData.attractions[idx] = item;
    } else {
      appData.attractions.push(item);
    }
    renderAttractions();
  }
  
  // Sync state to Cloud / Local
  await persistState();
  
  closeModal('crud-modal');
  alert("บันทึกข้อมูลและอัปเดตหน้าเว็บสำเร็จ!");
}

// Delete item
async function deleteItem(type, id) {
  let label = "ข้อมูลนี้";
  if (type === 'bus') {
    const item = appData.buses.find(b => b.id === id);
    if (item) label = `รถบัส "${item.title}"`;
  } else if (type === 'portfolio') {
    const item = appData.portfolio.find(p => p.id === id);
    if (item) label = `ผลงาน "${item.title}"`;
  } else if (type === 'attraction') {
    const item = appData.attractions.find(a => a.id === id);
    if (item) label = `ที่เที่ยว "${item.title}"`;
  }

  const confirmDelete = confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบ ${label} ออกจากระบบ? (การกระทำนี้ไม่สามารถย้อนกลับได้)`);
  if (!confirmDelete) return;
  
  if (type === 'bus') {
    appData.buses = appData.buses.filter(b => b.id !== id);
    renderBuses();
  } 
  else if (type === 'portfolio') {
    appData.portfolio = appData.portfolio.filter(p => p.id !== id);
    if (appData.portfolio.length <= 9) {
      appData.showAllPortfolio = false;
    }
    renderPortfolio();
  } 
  else if (type === 'attraction') {
    appData.attractions = appData.attractions.filter(a => a.id !== id);
    renderAttractions();
  }
  
  // Sync state to Cloud / Local
  await persistState();
  
  alert("ทำการลบข้อมูลเรียบร้อยแล้ว!");
}

// Increment visitor counter from cloud (or localStorage if local)
async function incrementVisitorCount() {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const visitorCountEl = document.getElementById('visitor-count');
  if (!visitorCountEl) return;
  
  if (isLocal) {
    let localCount = localStorage.getItem('mot_local_visits');
    let count = localCount ? parseInt(localCount, 10) : 0;
    count += 1;
    localStorage.setItem('mot_local_visits', count.toString());
    visitorCountEl.textContent = formatNumber(count);
  } else {
    try {
      const response = await fetch('/api/visit');
      if (response.ok) {
        const json = await response.json();
        if (json && json.count) {
          visitorCountEl.textContent = formatNumber(json.count);
        }
      }
    } catch (e) {
      console.warn("Failed to load visitor counter:", e);
    }
  }
}

/* ==========================================================================
   INITIALIZATION & ACTIONS listeners
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Init App data layer (async database load)
  initApp();
  
  // Increment visitor count
  incrementVisitorCount();
  
  // Header scroll class toggle
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
  
  // Mobile navigation menu toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.innerHTML = '☰';
      });
    });
  }
  
  // File upload input change listener (Auto-Compress to Base64)
  const fileInput = document.getElementById('crud-field-file');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        compressAndConvertToBase64(file, (base64Str) => {
          document.getElementById('crud-field-image').value = base64Str;
          const previewImg = document.getElementById('crud-img-preview');
          const previewContainer = document.getElementById('crud-img-preview-container');
          if (previewImg && previewContainer) {
            previewImg.src = base64Str;
            previewContainer.style.display = 'block';
          }
        });
      }
    });
  }

  // Form listener for cost calculations
  const calcForm = document.getElementById('cost-calc-form');
  if (calcForm) {
    calcForm.addEventListener('submit', calculateCost);
    const inputs = calcForm.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        calculateCost();
      });
    });
  }
  
  // Admin password login submit listener
  const authForm = document.getElementById('admin-auth-form');
  if (authForm) {
    authForm.addEventListener('submit', authenticateAdmin);
  }
  
  // Admin rates & contact edit form submit listener
  const ratesForm = document.getElementById('admin-rates-form');
  if (ratesForm) {
    ratesForm.addEventListener('submit', saveAdminRates);
  }
  
  // CRUD editor form submit listener
  const crudForm = document.getElementById('crud-editor-form');
  if (crudForm) {
    crudForm.addEventListener('submit', saveCrudItem);
  }
  
  // General close click bindings on modal background / exit buttons
  const closeButtons = document.querySelectorAll('.modal-close-btn, .modal-overlay');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close-btn') || e.target.tagName === 'svg' || e.target.tagName === 'path') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
          closeModal(activeModal.id);
          if (activeModal.id === 'admin-modal') {
            resetAdminModal();
          }
        }
      }
    });
  });
  
  const modalWindows = document.querySelectorAll('.modal-window');
  modalWindows.forEach(win => {
    win.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
});
