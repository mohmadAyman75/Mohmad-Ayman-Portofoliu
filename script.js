// Small JS for mobile nav + smooth UX
const toggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.nav-links')
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open')
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
  })
}

function handleSubmit(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const mailto = `mailto:mohamed@example.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(data.name)}&body=${encodeURIComponent(data.message + '\n\nPhone: ' + (data.phone||'N/A'))}`;
  window.location.href = mailto;
  e.target.reset();
  return false;
}

document.getElementById('year').textContent = new Date().getFullYear();
