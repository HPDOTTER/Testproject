let allNotes = {
    'notes': ['Banana', 'Rasen mähen'],
    'notesTitle': ['Frucht', 'Aufgabe'],
    'trashNotes': [],
    'trashNotesTitle': [],
    'doneNotes': [],
    'doneNotesTitle': [],
};

function init(){
    getFromLocalStorage();
    rendernotes();
    rendertrashnotes();
    renderdonenotes();
    console.table(allNotes);
}

function moveNote(iNote, start, destination){
    let note = allNotes[start].splice(iNote, 1);
    allNotes[destination].push(note[0]);
    let notetitle = allNotes[start + "Title"].splice(iNote, 1);
    allNotes[destination + "Title"].push(notetitle[0]);
    console.table(allNotes);
    rendernotes();
    rendertrashnotes();
    renderdonenotes();
    saveToLocalStorage();
}

function rendernotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let iNote = 0; iNote < allNotes.notes.length; iNote++) {
        contentRef.innerHTML += getNoteTemplate(iNote);  
    }
}
function rendertrashnotes(){
    let trashcontentRef = document.getElementById('trash-content');
    trashcontentRef.innerHTML = '';

    for (let itrashNote = 0; itrashNote < allNotes.trashNotes.length; itrashNote++) {
        trashcontentRef.innerHTML += gettrashNoteTemplate(itrashNote);  
    }
}
function renderdonenotes(){
    let donecontentRef = document.getElementById('done-content');
    donecontentRef.innerHTML = '';

    for (let idoneNote = 0; idoneNote < allNotes.doneNotes.length; idoneNote++) {
        donecontentRef.innerHTML += getdoneNoteTemplate(idoneNote);  
    }
}

// notizen hinzufügen
function addNote(){
    let noteInputRef = document.getElementById('noteInput');
    let titleInputRef = document.getElementById('titleInput');
    if (noteInputRef.value != "" && titleInputRef.value != "") {
        allNotes.notes.push(noteInputRef.value);
        allNotes.notesTitle.push(titleInputRef.value);
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

function moveToDoneComplete(idoneNote){
    allNotes.doneNotes.splice(idoneNote, 1);
    allNotes.doneNotesTitle.splice(idoneNote, 1);

    rendernotes();
    renderdonenotes();
    rendertrashnotes();
    saveToLocalStorage();
}
//notiz löschen
//notiz komplett löschen
function deleteNoteComplete(itrashNote){
    allNotes.trashNotes.splice(itrashNote, 1);
    allNotes.trashNotesTitle.splice(itrashNote, 1);

    rendernotes();
    renderdonenotes();
    rendertrashnotes();
    saveToLocalStorage();
}


function saveToLocalStorage(){
    localStorage.setItem('allNotes.notes', JSON.stringify(allNotes.notes));
    localStorage.setItem('allNotes.notestitle', JSON.stringify(allNotes.notesTitle));
    localStorage.setItem('allNotes.trashNotes', JSON.stringify(allNotes.trashNotes));
    localStorage.setItem('allNotes.trashnotestitle', JSON.stringify(allNotes.trashNotesTitle));
    localStorage.setItem('allNotes.doneNotes', JSON.stringify(allNotes.doneNotes));
    localStorage.setItem('allNotes.donenotestitle', JSON.stringify(allNotes.doneNotesTitle));
}
function getFromLocalStorage() {
    if (localStorage.getItem('allNotes.notes')) {
        allNotes.notes = JSON.parse(localStorage.getItem('allNotes.notes'));
    }
    if (localStorage.getItem('allNotes.notestitle')) {
        allNotes.notesTitle = JSON.parse(localStorage.getItem('allNotes.notestitle'));
    }
    if (localStorage.getItem('allNotes.trashNotes')) {
        allNotes.trashNotes = JSON.parse(localStorage.getItem('allNotes.trashNotes'));
    }
    if (localStorage.getItem('allNotes.trashnotestitle')) {
        allNotes.trashNotesTitle = JSON.parse(localStorage.getItem('allNotes.trashnotestitle'));
    }
    if (localStorage.getItem('allNotes.doneNotes')) {
        allNotes.doneNotes = JSON.parse(localStorage.getItem('allNotes.doneNotes'));
    }
    if (localStorage.getItem('allNotes.donenotestitle')) {
        allNotes.doneNotesTitle = JSON.parse(localStorage.getItem('allNotes.donenotestitle'));
    }
}

//ich muss definieren wo sie anzuzeigen sind
// -> wann werden sie angezeigt



// notizen löschen
// notizen archivieren