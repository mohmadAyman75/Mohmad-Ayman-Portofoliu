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
  const mailto = `mailto:mohmdwe75@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(data.name)}&body=${encodeURIComponent(data.message + '\n\nPhone: ' + (data.phone||'N/A'))}`;
  window.location.href = mailto;
  e.target.reset();
  return false;
}

document.getElementById('year').textContent = new Date().getFullYear();

const certificateTrigger = document.querySelector('[data-certificate-trigger]')
const certificateLightbox = document.getElementById('certificate-lightbox')
const certificateClose = document.querySelector('[data-certificate-close]')

function openCertificate() {
  certificateLightbox.hidden = false
  document.body.classList.add('lightbox-open')
  certificateClose.focus()
}

function closeCertificate() {
  certificateLightbox.hidden = true
  document.body.classList.remove('lightbox-open')
  certificateTrigger.focus()
}

if (certificateTrigger && certificateLightbox && certificateClose) {
  certificateTrigger.addEventListener('click', openCertificate)
  certificateClose.addEventListener('click', closeCertificate)
  certificateLightbox.addEventListener('click', (event) => {
    if (event.target === certificateLightbox) closeCertificate()
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !certificateLightbox.hidden) closeCertificate()
  })
}
