function saveContent() {
  const subtitle = prompt("Введите подзаголовок:", document.getElementById('subtitle').textContent);
  const content = prompt("Введите основной текст:", document.getElementById('text-content').innerHTML);

  if (subtitle !== null && content !== null) {
    const data = { subtitle, content };
    localStorage.setItem('landingData', JSON.stringify(data));
    alert('✅ Данные сохранены! Перезагрузите страницу.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const savedData = localStorage.getItem('landingData');
  if (savedData) {
    const data = JSON.parse(savedData);
    document.getElementById('subtitle').textContent = data.subtitle || 'Подзаголовок по умолчанию';
    document.getElementById('text-content').innerHTML = data.content || 'Основной текст по умолчанию.';
  }
});