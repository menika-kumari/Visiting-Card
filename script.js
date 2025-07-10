document.getElementById('cardForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const cardPreview = document.getElementById('cardPreview');
  cardPreview.innerHTML = `
    <h2>${data.name}</h2>
    <p><strong>${data.designation}</strong></p>
    <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
    <p>Phone: <a href="tel:${data.phone}">${data.phone}</a></p>
    ${data.website ? `<p>Website: <a href="${data.website}" target="_blank">${data.website}</a></p>` : ''}
    ${data.linkedin ? `<p>LinkedIn: <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>` : ''}
  `;

  cardPreview.classList.remove('hidden');
  document.getElementById('downloadBtn').classList.remove('hidden');
});

// Download as image
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', () => {
  const card = document.getElementById('cardPreview');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'visiting_card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
