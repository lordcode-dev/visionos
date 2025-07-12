const API = "https://your-replit-backend.repl.co"; // Replace with your actual backend URL

function save(token){ localStorage.setItem('token', token); }
function token(){ return localStorage.getItem('token'); }
function authHeader(){ return { 'Authorization': `Bearer ${token()}` }; }
function gotoDash(){ location.href = 'dashboard.html'; }

if (document.getElementById('login')){
  document.getElementById('login').onclick = async () => {
    const r = await fetch(API+'/login', {
      method:'POST',
      body: new URLSearchParams({
        username: user.value,
        password: pass.value
      })
    });
    if(r.ok){
      save((await r.json()).token);
      gotoDash();
    } else {
      alert('Invalid username or password.');
    }
  };

  document.getElementById('signup').onclick = async () => {
    const r = await fetch(API+'/signup', {
      method:'POST',
      body: new URLSearchParams({
        username: user.value,
        password: pass.value
      })
    });
    if(r.ok){
      save((await r.json()).token);
      gotoDash();
    } else {
      alert('User may already exist.');
    }
  };
}

if (document.getElementById('logout')){
  logout.onclick = () => {
    localStorage.removeItem('token');
    location.href = 'index.html';
  };
}
