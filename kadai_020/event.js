const textBtn = document.getElementById('btn');

textBtn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
});