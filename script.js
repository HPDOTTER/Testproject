let notestitle= ['Frucht', 'Aufgabe'];
let notes= ['Banana', 'Rasen mähen'];
let trashNotes = [];
let trashnotestitle =[];
let doneNotes = [];
let donenotestitle = [];

function init(){
    getFromLocalStorage();
    rendernotes();
    rendertrashnotes();
    renderdonenotes();
}

function rendernotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let iNote = 0; iNote < notes.length; iNote++) {
        contentRef.innerHTML += getNoteTemplate(iNote);  
    }
}
function rendertrashnotes(){
    let trashcontentRef = document.getElementById('trash-content');
    trashcontentRef.innerHTML = '';

    for (let itrashNote = 0; itrashNote < trashNotes.length; itrashNote++) {
        trashcontentRef.innerHTML += gettrashNoteTemplate(itrashNote);  
    }
}
function renderdonenotes(){
    let donecontentRef = document.getElementById('done-content');
    donecontentRef.innerHTML = '';

    for (let idoneNote = 0; idoneNote < doneNotes.length; idoneNote++) {
        donecontentRef.innerHTML += getdoneNoteTemplate(idoneNote);  
    }
}

// notizen hinzufügen
function addNote(){
    let noteInputRef = document.getElementById('noteInput');
    let titleInputRef = document.getElementById('titleInput');
    if (noteInputRef.value != "" && titleInputRef.value != "") {
        notes.push(noteInputRef.value);
        notestitle.push(titleInputRef.value);
    }
    if (noteInputRef.value === "" || titleInputRef.value === "") {
        alert("Bitte füllen Sie beide Felder aus.");
        return;
    }
    saveToLocalStorage();
    rendernotes();
    noteInputRef.value = '';
    titleInputRef.value = '';
}

function movetodone(iNote){
    let doneNote = notes.splice(iNote, 1);
    doneNotes.push(doneNote[0]);
    let donenotetitle = notestitle.splice(iNote, 1);
    donenotestitle.push(donenotetitle[0]);

    rendernotes();
    renderdonenotes();
    rendertrashnotes();
    saveToLocalStorage();
}
function movetodonecomplete(idoneNote){
    doneNotes.splice(idoneNote, 1);
    donenotestitle.splice(idoneNote, 1);

    rendernotes();
    renderdonenotes();
    rendertrashnotes();
    saveToLocalStorage();
}
//notiz löschen
function deleteNote(iNote){
    let trashNote = notes.splice(iNote, 1);
    trashNotes.push(trashNote[0]);
    let trashnotetitle = notestitle.splice(iNote, 1);
    trashnotestitle.push(trashnotetitle[0]);

    rendernotes();
    renderdonenotes();
    rendertrashnotes();
    saveToLocalStorage();
}

//notiz komplett löschen
function deleteNotecomplete(itrashNote){
    trashNotes.splice(itrashNote, 1);
    trashnotestitle.splice(itrashNote, 1);

    rendernotes();
    renderdonenotes();
    rendertrashnotes();
    saveToLocalStorage();
}


function saveToLocalStorage(){
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('notestitle', JSON.stringify(notestitle));
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));
    localStorage.setItem('trashnotestitle', JSON.stringify(trashnotestitle));
    localStorage.setItem('doneNotes', JSON.stringify(doneNotes));
    localStorage.setItem('donenotestitle', JSON.stringify(donenotestitle));
}
function getFromLocalStorage() {
    if (localStorage.getItem('notes')) {
        notes = JSON.parse(localStorage.getItem('notes'));
    }
    if (localStorage.getItem('notestitle')) {
        notestitle = JSON.parse(localStorage.getItem('notestitle'));
    }
    if (localStorage.getItem('trashNotes')) {
        trashNotes = JSON.parse(localStorage.getItem('trashNotes'));
    }
    if (localStorage.getItem('trashnotestitle')) {
        trashnotestitle = JSON.parse(localStorage.getItem('trashnotestitle'));
    }
    if (localStorage.getItem('doneNotes')) {
        doneNotes = JSON.parse(localStorage.getItem('doneNotes'));
    }
    if (localStorage.getItem('donenotestitle')) {
        donenotestitle = JSON.parse(localStorage.getItem('donenotestitle'));
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});

//ich muss definieren wo sie anzuzeigen sind
// -> wann werden sie angezeigt



// notizen löschen
// notizen archivieren