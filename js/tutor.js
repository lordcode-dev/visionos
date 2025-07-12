if (document.getElementById('ask')){
  const results = document.getElementById('results');
  ask.onclick = async () => {
    const q = query.value;
    const r = await fetch(API+`/tutor?query=${encodeURIComponent(q)}`, {
      headers: authHeader()
    });
    const data = await r.json();
    results.innerHTML = data.recommendations.map(c =>
      `<li><a href="${c.url}" target="_blank">${c.title}</a></li>`).join('');

    // Save progress
    await fetch(API+'/progress', {
      method: 'POST',
      headers: {
        ...authHeader(),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `topic=${encodeURIComponent(q)}&done=false`
    });
    loadProgress();
  };
}

async function loadProgress(){
  const list = document.getElementById('progress-list');
  const r = await fetch(API+'/progress', { headers: authHeader() });
  const items = await r.json();
  list.innerHTML = items.map(p =>
    `<li>${p.topic} – ${p.completed ? '✅' : '⏳'}</li>`).join('');
}

if(document.getElementById('progress-list')) loadProgress();
