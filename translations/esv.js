const console_view = document.getElementById('console-view');
const genesisText = document.getElementById('book-1')
let chapter = 1;
let array = []
fetch("translations/esv.json").then(
    (value) => {
        return value.json()
    }
).then(
    (value) => {
        array = value
        const b1 = array.genesis;
        const g1 = b1.genOne;
        genesisText.textContent = g1;
    }
);

