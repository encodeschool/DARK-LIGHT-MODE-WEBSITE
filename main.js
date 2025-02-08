let ctrlIcon = document.querySelector('.ctrlIcon');
ctrlIcon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        ctrlIcon.classList.remove('bx-moon');
        ctrlIcon.classList.add('bx-sun');
    } else {
        ctrlIcon.classList.add('bx-moon');
        ctrlIcon.classList.remove('bx-sun');
    }
}