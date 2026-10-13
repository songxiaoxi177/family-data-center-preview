(() => {
  const list=document.getElementById('networkDevices');
  const summary=document.getElementById('networkSummary');
  const status=document.getElementById('networkApiStatus');
  const demo=[
    ['192.168.1.2','主电脑','电脑'],
    ['192.168.1.5','家庭手机','手机'],
    ['192.168.1.8','智能电视','电视'],
    ['192.168.1.12','客厅设备','IoT']
  ];
  if(!list)return;
  summary.textContent='192.168.1.0/24 · 发现 4 台设备（演示数据）';
  status.textContent='演示模式';
  list.innerHTML=demo.map(x=>`<article class="device detail"><div class="device-icon pc">🔌</div><div class="device-main"><b>${x[1]}</b><p>${x[2]} · ${x[0]}</p></div><i class="online">在线</i></article>`).join('');
})();
