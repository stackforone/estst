// ข้อมูลอัตราจ่ายและเวลาของหวยแต่ละประเภท
const lotteryData = {
    'ฮานอยปกติ': {
        rates: [
            '3 ตัวบน: 900',
            '2 ตัวบน: 92',
            'วิ่งบน: 3.2',
            '3 ตัวโต๊ด: 150',
            '2 ตัวล่าง: 90',
            'วิ่งล่าง: 4.5'
        ],
        closeTime: '18:00',
        resultTime: '18:30'
    },
    'ฮานอยอาเซียน': {
        rates: [
            '3 ตัวบน: 850',
            '2 ตัวบน: 85',
            'วิ่งบน: 3.0',
            '3 ตัวโต๊ด: 140',
            '2 ตัวล่าง: 85',
            'วิ่งล่าง: 4.0'
        ],
        closeTime: '19:00',
        resultTime: '19:30'
    },
    'หวยไทย': {
        rates: [
            '3 ตัวบน: 900',
            '2 ตัวบน: 90',
            'วิ่งบน: 3.2',
            '3 ตัวโต๊ด: 150',
            '2 ตัวล่าง: 90',
            'วิ่งล่าง: 4.5'
        ],
        closeTime: '16:00',
        resultTime: '16:30'
    },
    'หวยหุ้น': {
        rates: [
            '3 ตัวบน: 850',
            '2 ตัวบน: 85',
            'วิ่งบน: 3.0',
            '3 ตัวโต๊ด: 140',
            '2 ตัวล่าง: 85',
            'วิ่งล่าง: 4.0'
        ],
        closeTime: '15:30',
        resultTime: '16:00'
    },
    'หวยหุ้น VIP': {
        rates: [
            '3 ตัวบน: 920',
            '2 ตัวบน: 92',
            'วิ่งบน: 3.5',
            '3 ตัวโต๊ด: 160',
            '2 ตัวล่าง: 92',
            'วิ่งล่าง: 4.8'
        ],
        closeTime: '17:00',
        resultTime: '17:30'
    },
    'หวยลาว': {
        rates: [
            '3 ตัวบน: 880',
            '2 ตัวบน: 88',
            'วิ่งบน: 3.1',
            '3 ตัวโต๊ด: 140',
            '2 ตัวล่าง: 88',
            'วิ่งล่าง: 4.2'
        ],
        closeTime: '20:00',
        resultTime: '20:30'
    }
};

// ฟังก์ชันสำหรับแสดงเมนูย่อยของหวยฮานอย
function showSubMenu(type) {
    if (type === 'ฮานอย') {
        document.getElementById('main-menu').classList.add('hidden');
        document.getElementById('submenu-hanoi').classList.remove('hidden');
    }
}

// ฟังก์ชันสำหรับแสดงรายละเอียดของหวยที่เลือก
function showDetails(type) {
    // ซ่อนเมนูหลักและเมนูย่อยฮานอย
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('submenu-hanoi').classList.add('hidden');

    // แสดงชื่อหวย
    document.getElementById('lottery-title').innerText = type;

    // อัปเดตรายการอัตราจ่าย
    const rateList = document.getElementById('rate-list');
    rateList.innerHTML = '';  // ลบข้อมูลเดิม
    lotteryData[type].rates.forEach(rate => {
        const li = document.createElement('li');
        li.textContent = rate;
        rateList.appendChild(li);
    });

    // อัปเดตเวลาปิดรับและเวลาเฉลย
    document.getElementById('close-time').textContent = lotteryData[type].closeTime;
    document.getElementById('result-time').textContent = lotteryData[type].resultTime;

    // แสดงรายละเอียด
    document.getElementById('details').classList.remove('hidden');
}