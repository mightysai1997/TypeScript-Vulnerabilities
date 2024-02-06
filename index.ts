// index.ts
document.getElementById('clickMeButton')?.addEventListener('click', () => {
  alert('Button clicked!');
});

// attacker.html
const iframe = document.createElement('iframe');
iframe.src = 'malicious.html';
document.body.appendChild(iframe);
