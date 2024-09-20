function getNoteTemplate(iNote){
    return `
            <div class="task">
                <div class="titel">${allNotes.notesTitle[iNote]}:</div>
                <div class="aufgabe">${allNotes.notes[iNote]}</div>
                <div class="buttons">
                    <button onclick="moveNote(${iNote},'notes','doneNotes')">Y</button>
                    <button onclick="moveNote(${iNote},'notes','trashNotes')">X</button>
                </div>
            </div>
            `
}

function gettrashNoteTemplate(itrashNote){
    return `
            <div class="task">
                <div class="titel">${allNotes.trashNotesTitle[itrashNote]}:</div>
                <div class="aufgabe">${allNotes.trashNotes[itrashNote]}</div>
                <div class="buttons">
                    <button onclick="moveNote(${itrashNote},'trashNotes','notes')">Y</button>
                    <button onclick="deleteNoteComplete(${itrashNote})">X</button>
                </div>
            </div>
            `;
}

function getdoneNoteTemplate(idoneNote){
    return `
            <div class="task">
                <div class="titel">${allNotes.doneNotesTitle[idoneNote]}:</div>
                <div class="aufgabe">${allNotes.doneNotes[idoneNote]}</div>
                <div class="buttons">
                    <button onclick="moveNote(${idoneNote},'doneNotes','notes')">Y</button>
                    <button onclick="moveToDoneComplete(${idoneNote})">X</button>
                </div>
            </div>
            `;
}   

