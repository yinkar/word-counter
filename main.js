const editor = document.querySelector('#editor');
const words = document.querySelector('.word-count > .words');
const characters = document.querySelector('.word-count > .characters');

editor.addEventListener('input', function() {
    words.innerText = this.value
        .split(/\s/)
        .filter(
            e => e.trim().length > 0
        ).length;
    characters.innerText = this.value.split('').length;
});
