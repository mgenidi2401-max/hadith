const themeBtn=document.getElementById('themeBtn');
const search=document.getElementById('lectureSearch');
const done=document.getElementById('done-lecture-01');
const progress=document.getElementById('progressText');

const THEME_KEY='hadith-site-theme';
const PROGRESS_KEY='hadith-progress-lecture-01';

if(localStorage.getItem(THEME_KEY)==='dark'){
  document.body.classList.add('dark');
  themeBtn.textContent='☀️ الوضع النهاري';
}
themeBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  const dark=document.body.classList.contains('dark');
  localStorage.setItem(THEME_KEY,dark?'dark':'light');
  themeBtn.textContent=dark?'☀️ الوضع النهاري':'🌙 الوضع الليلي';
});

done.checked=localStorage.getItem(PROGRESS_KEY)==='done';
function updateProgress(){progress.textContent=done.checked?'100%':'0%'}
updateProgress();
done.addEventListener('change',()=>{
  localStorage.setItem(PROGRESS_KEY,done.checked?'done':'');
  updateProgress();
});

search.addEventListener('input',()=>{
  const q=search.value.trim().toLowerCase();
  document.querySelectorAll('.lecture-card').forEach(card=>{
    card.style.display=!q||card.dataset.title.toLowerCase().includes(q)?'block':'none';
  });
});
