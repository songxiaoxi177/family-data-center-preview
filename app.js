const pages=[...document.querySelectorAll('.page')];const nav=[...document.querySelectorAll('nav button')];
const devices={
 pc:{icon:'🖥️',type:'Windows PC',name:'主电脑',cpu:'32%',ram:'48%',disk:'61%',traffic:'8.4 GB'},
 phone:{icon:'📱',type:'Android · Wi-Fi',name:'我的手机',cpu:'—',ram:'—',disk:'68%',traffic:'1.8 GB'},
 nas:{icon:'💾',type:'家庭存储服务器',name:'家庭 NAS',cpu:'18%',ram:'39%',disk:'62%',traffic:'4.7 GB'},
 router:{icon:'📡',type:'家庭网络核心设备',name:'家庭网络',cpu:'12%',ram:'—',disk:'—',traffic:'3.7 GB'}
};
function show(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));nav.forEach(b=>b.classList.toggle('active',b.dataset.page===id));location.hash=id;scrollTo(0,0)}
function openDevice(key){const d=devices[key]||devices.pc;document.querySelector('#detail-icon').textContent=d.icon;document.querySelector('#detail-type').textContent=d.type;document.querySelector('#detail-name').textContent=d.name;document.querySelector('#detail-cpu').textContent=d.cpu;document.querySelector('#detail-ram').textContent=d.ram;document.querySelector('#detail-disk').textContent=d.disk;document.querySelector('#detail-traffic').textContent=d.traffic;document.querySelector('#detail-updated').textContent='刚刚';show('device-detail')}
nav.forEach(b=>b.addEventListener('click',()=>show(b.dataset.page)));
document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>openDevice(el.dataset.device)));
document.querySelector('[data-back="devices"]').addEventListener('click',()=>show('devices'));
const initial=location.hash.replace('#','');if(pages.some(p=>p.id===initial)&&initial!=='device-detail')show(initial);
function updateTime(){const d=new Date();const el=document.querySelector('#time');if(el)el.textContent=d.toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'})}updateTime();setInterval(updateTime,30000);
document.querySelector('#notify').onclick=()=>alert('当前没有新的高优先级异常。\n真实设备接入后，这里会显示 CPU、网络、存储等异常提醒。');