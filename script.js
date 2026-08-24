// EDIT THESE DETAILS before publishing if you want real contact buttons.
// I have intentionally not guessed phone/email/Facebook details.
const SITE = {
  name: "Acharya Govind Shastri",
  phone: "+91 98765 43210",
  whatsapp: "+91 9876543210",
  email: ""acharya9227@gmail.com",
  location: "Naimisharanya, Uttar Pradesh, India",
  facebook: "https://www.facebook.com/raghavendra.mishra.818604",
  youtube: "https://youtube.com/@acharyagovindshastri6893?si=yqWklWoXcAeDVBJO",
  Instagram: "https://www.instagram.com/raghavendramishra208?igsi=MTlyNjVtdzZtNXExaw==",
};

const details = document.getElementById('contactDetails');
const rows = [
  ['Phone', SITE.phone, SITE.phone ? `tel:${SITE.phone.replace(/\s/g,'')}` : ''],
  ['WhatsApp', SITE.whatsapp ? `+${SITE.whatsapp.replace(/^\+/,'')}` : '', SITE.whatsapp ? `https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}` : ''],
  ['Email', SITE.email, SITE.email ? `mailto:${SITE.email}` : ''],
  ['Location', SITE.location, '']
];
rows.forEach(([label,value,href]) => {
  const div=document.createElement('div'); div.className='detail';
  const shown=value || 'Add this detail in script.js';
  div.innerHTML=`<b>${label}</b>${href?`<a href="${href}" ${label==='WhatsApp'?'target="_blank" rel="noopener"':''}>${shown}</a>`:`<span>${shown}</span>`}`;
  details.appendChild(div);
});

document.getElementById('youtubeLink').href=SITE.youtube;
const fb=document.getElementById('facebookLink');
if(SITE.facebook){fb.href=SITE.facebook;fb.target='_blank';fb.rel='noopener';fb.removeAttribute('aria-disabled')}else{fb.addEventListener('click',e=>e.preventDefault())}
const wa=document.getElementById('waFloat');
if(SITE.whatsapp){wa.href=`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Namaste, I would like to enquire about a consultation.')}`;wa.target='_blank';wa.rel='noopener'}

document.getElementById('enquiryForm').addEventListener('submit',e=>{
  e.preventDefault(); const fd=new FormData(e.currentTarget);
  const text=`Namaste Acharya Ji,\n\nMy name is ${fd.get('name')}.\nPhone: ${fd.get('phone')}\nEmail: ${fd.get('email')||'Not provided'}\nService: ${fd.get('service')}\n\n${fd.get('message')}`;
  if(!SITE.whatsapp){alert('WhatsApp number has not been added yet. Open script.js and fill SITE.whatsapp before publishing.');return}
  window.open(`https://wa.me/${SITE.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(text)}`,'_blank','noopener');
});

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.13});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const btn=document.querySelector('.menu-btn'),links=document.querySelector('.links');
btn.addEventListener('click',()=>{const open=links.classList.toggle('open');btn.setAttribute('aria-expanded',String(open))});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const dlg=document.getElementById('lightbox'),dlgImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery button').forEach(b=>b.addEventListener('click',()=>{dlgImg.src=b.querySelector('img').src;dlg.showModal()}));
document.getElementById('closeLightbox').onclick=()=>dlg.close();
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
document.getElementById('year').textContent=new Date().getFullYear();
