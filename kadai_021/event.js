const textBtn = document.getElementById('btn');

textBtn.addEventListener('click', () => {
    setTimeout(() => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
    }, 2000);
});