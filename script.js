const DATABASE = {
    professional: [
        {
            id: "aslab",
            tag: "Leadership - 2026",
            title: "Assistant Laboratory",
            company: "Embedded System & Computer Network Laboratory",
            github: "",
            url: "", 
            desc: "Menjabat sebagai <strong>Head of Hardware Division</strong>. Mengelola infrastruktur fisik laboratorium dan mendampingi riset praktikan.",
            media: ["https://via.placeholder.com/600x400?text=Laboratory+Activity"]
        },

        {
            id: "iconplus",
            tag: "Internship - 2025",
            title: "Engineer Intern",
            company: "PLN Icon Plus",
            github: "",
            url: "",
            desc: "Fokus pada integrasi jaringan modem OLT, simulasi konektivitas, dan monitoring trafik data di wilayah Jakarta & Banten.",
            media: ["https://via.placeholder.com/600x400?text=Network+Integration"]
        },

        {
            id: "ittalk",
            tag: "Internship - 2022",
            title: "IT Techician Assistant",
            company: "IT Talk Semarang",
            github: "",
            url: "",
            desc: "Fokus pada integrasi jaringan modem OLT, simulasi konektivitas, dan monitoring trafik data di wilayah Jakarta & Banten.",
            media: ["https://via.placeholder.com/600x400?text=Network+Integration"]
        }
    ],
    projects: [
        
        {
            id: "Gridshield",
            tag: "Cyber Security - 2026",
            title: "Gridshield",
            company: "Smart Meter Security System",
            github: "https://github.com/ichwanfauzi", 
            url: "",
            desc: "Konsep sistem keamanan untuk smart meter guna meningkatkan proteksi infrastruktur kelistrikan dari potensi ancaman siber.",
            media: ["https://via.placeholder.com/600x400?text=AR+Documentation"]
        },

        {
            id: "foodcare",
            tag: "Mobile App - 2026",
            title: "FoodCare Project",
            company: "Android Development",
            github: "https://github.com/ichwanfauzi", 
            url: "",
            desc: "Pengembangan aplikasi mobile berbasis Android untuk manajemen stok dan distribusi pangan secara digital. Aplikasi dirancang untuk memonitor ketersediaan, pencatatan, dan pengelolaan data secara efisien.",
            media: ["img/Mobile_FoodCare.png"]
        },

        {
            id: "creativemedia",
            tag: "Creative Design - 2025",
            title: "Visual Media & Branding Design",
            company: "Creative Production",
            github: "", 
            url: "https://github.com/ichwanfauzi",
            desc: "Perancangan poster, live report, background design, dan materi branding untuk kebutuhan event dan publikasi digital.",
            media: ["img/design.png"]
        },

        {
            id: "videoediting",
            tag: "Multimedia - 2025",
            title: "Video Editing & Motion Content",
            company: "Content Production",
            github: "", 
            url: "",
            desc: "Produksi dan pengeditan video dokumentasi serta konten promosi untuk media sosial dan kebutuhan event.",
            media: ["img/video.png"]
        },         ]
    };

function init() {
    renderGrid('prof-grid', DATABASE.professional);
    renderGrid('project-grid', DATABASE.projects);
    runTypewriter();
}
function renderGrid(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = data.map(item => `
        <div class="card" onclick="showDetails('${item.id}')" style="position:relative; overflow:hidden;">
            
            <div style="position:absolute; top:15px; right:15px; z-index:10;">
                ${item.github ? `
                    <a href="${item.github}" target="_blank" onclick="event.stopPropagation()" 
                       style="display:flex; align-items:center; justify-content:center; width:35px; height:35px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:10px; color:white; text-decoration:none; backdrop-filter:blur(5px); transition:all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2);"
                       onmouseover="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='rotate(12deg) scale(1.1)';" 
                       onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.transform='rotate(0deg) scale(1)';">
                        <i class="fab fa-github" style="font-size:18px;"></i>
                    </a>
                ` : (item.url ? `
                    <a href="${item.url}" target="_blank" onclick="event.stopPropagation()" 
                       style="display:flex; align-items:center; justify-content:center; width:35px; height:35px; background:rgba(255, 51, 168, 0.1); border:1px solid rgba(255, 51, 168, 0.3); border-radius:10px; color:#ff33a8; text-decoration:none; backdrop-filter:blur(5px); transition:all 0.3s ease; box-shadow: 0 4px 15px rgba(255, 51, 168, 0.2);"
                       onmouseover="this.style.background='rgba(255, 51, 168, 0.3)'; this.style.transform='rotate(-12deg) scale(1.1)'; this.style.boxShadow='0 0 15px #ff33a8';" 
                       onmouseout="this.style.background='rgba(255, 51, 168, 0.1)'; this.style.transform='rotate(0deg) scale(1)'; this.style.boxShadow='0 4px 15px rgba(255, 51, 168, 0.2)';">
                        <i class="fas fa-link" style="font-size:16px;"></i>
                    </a>
                ` : '')}
            </div>

            <div class="tag" style="font-size:10px; color:var(--primary); font-weight:700; margin-bottom:15px;">${item.tag}</div>
            <h3 style="margin: 0 0 10px 0;">${item.title}</h3>
            <p style="font-size: 13px; color: var(--secondary); opacity: 0.8; margin:0;">${item.company}</p>
            <div style="margin-top: 20px; font-size: 11px; opacity: 0.4; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-expand-arrows-alt" style="color:var(--accent)"></i> KLIK UNTUK DETAIL
            </div>
        </div>
    `).join('');
}

function showDetails(id) {
    const allData = [...DATABASE.professional, ...DATABASE.projects];
    const item = allData.find(d => d.id === id);
    if(!item) return;

    const content = document.getElementById('details-content');
    content.innerHTML = `
    <div style="animation: fadeIn 0.5s ease;">
        <span class="tag" style="background:rgba(255, 51, 168, 0.1); color:var(--accent); padding:5px 15px; border-radius:5px; font-size:12px;">${item.tag}</span>
        <h2 style="font-size:2.5rem; margin:15px 0 5px 0; color:var(--primary);">${item.title}</h2>
        <p style="color:var(--secondary); font-weight:600; margin-bottom:30px;">${item.company}</p>

        <div class="project-links" style="margin-bottom: 40px; display: flex; gap: 15px; flex-wrap: wrap;">
            ${item.github ? `
                <a href="${item.github}" target="_blank" 
                   style="position:relative; text-decoration:none; color:white; background:rgba(255,255,255,0.05); padding:12px 28px; border-radius:12px; display:flex; align-items:center; gap:10px; font-weight:700; font-size:14px; letter-spacing:0.5px; border: 1px solid rgba(255,255,255,0.1); backdrop-filter:blur(10px); transition:all 0.4s cubic-bezier(0.23, 1, 0.32, 1); overflow:hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.2);"
                   onmouseover="this.style.transform='translateY(-5px) scale(1.02)'; this.style.borderColor='rgba(255,255,255,0.5)'; this.style.boxShadow='0 15px 30px rgba(0,0,0,0.4)'; this.querySelector('.shine').style.left='100%';" 
                   onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.borderColor='rgba(255,255,255,0.1)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'; this.querySelector('.shine').style.left='-100%';">
                    <i class="fab fa-github" style="font-size:1.3rem;"></i> GitHub
                    <div class="shine" style="content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition:0.5s;"></div>
                </a>
            ` : ''}

            ${item.url ? `
                <a href="${item.url}" target="_blank" 
                   style="position:relative; text-decoration:none; color:white; background:rgba(255, 51, 168, 0.15); padding:12px 28px; border-radius:12px; display:flex; align-items:center; gap:10px; font-weight:700; font-size:14px; letter-spacing:0.5px; border: 1px solid rgba(255, 51, 168, 0.3); backdrop-filter:blur(10px); transition:all 0.4s cubic-bezier(0.23, 1, 0.32, 1); overflow:hidden; box-shadow: 0 10px 20px rgba(255, 51, 168, 0.2);"
                   onmouseover="this.style.transform='translateY(-5px) scale(1.02)'; this.style.background='rgba(255, 51, 168, 0.25)'; this.style.borderColor='rgba(255, 51, 168, 0.6)'; this.style.boxShadow='0 0 30px rgba(255, 51, 168, 0.5)'; this.querySelector('.shine').style.left='100%';" 
                   onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.background='rgba(255, 51, 168, 0.15)'; this.style.borderColor='rgba(255, 51, 168, 0.3)'; this.style.boxShadow='0 10px 20px rgba(255, 51, 168, 0.2)'; this.querySelector('.shine').style.left='-100%';">
                    <i class="fas fa-link" style="font-size:1.1rem;"></i> View Work
                    <div class="shine" style="content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); transition:0.5s;"></div>
                </a>
            ` : ''}
        </div>

        <p style="line-height:1.8; opacity:0.9; max-width:800px; font-size:1.1rem; white-space: pre-line; margin-bottom: 50px;">${item.desc}</p>
        
        <h3 class="section-title" style="margin-top:60px; border-left: 4px solid var(--accent); padding-left: 15px; margin-bottom: 25px;">Dokumentasi & Media</h3>
        <div class="doc-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            ${item.media && item.media.length > 0 ? 
                item.media.map(m => `<img src="${m}" style="width:100%; border-radius:10px; border: 1px solid rgba(255,255,255,0.1);" onerror="this.src='https://via.placeholder.com/600x400?text=Image+Not+Found'">`).join('') 
                : '<p style="opacity:0.5;">Tidak ada media tersedia.</p>'
            }
        </div>
    </div>
    `;

    showPage('details');
}

function showPage(page) {
    document.getElementById('home-page').style.display = page === 'home' ? 'block' : 'none';
    document.getElementById('details-page').style.display = page === 'details' ? 'block' : 'none';
    window.scrollTo(0,0);
}

function runTypewriter() {
    const texts = ["Network Engineer", "Design Grapic", "Cyber Security"];
    let count = 0; let index = 0;
    (function type() {
        if(count === texts.length) count = 0;
        let currentText = texts[count];
        let letter = currentText.slice(0, ++index);
        document.getElementById("typewriter").textContent = `> ${letter}_`;
        if(letter.length === currentText.length) { count++; index = 0; setTimeout(type, 2000); }
        else { setTimeout(type, 100); }
    }());
}

init();