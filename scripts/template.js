function getNoteTemplate(iNote){
    return `
            <div class="task">
                <div class="titel">${notestitle[iNote]}:</div>
                <div class="aufgabe">${notes[iNote]}</div>
                <div class="buttons">
                    <button onclick="movetodone(${iNote})">Y</button>
                    <button onclick="deleteNote(${iNote})">X</button>
                </div>
            </div>
            `
}

function gettrashNoteTemplate(itrashNote){
    return `
            <div class="task">
                <div class="titel">${trashnotestitle[itrashNote]}:</div>
                <div class="aufgabe">${trashNotes[itrashNote]}</div>
                <div class="buttons-alone">
                    <button onclick="deleteNotecomplete(${itrashNote})">X</button>
                </div>
            </div>
            `;
}

function getdoneNoteTemplate(idoneNote){
    return `
            <div class="task">
                <div class="titel">${donenotestitle[idoneNote]}:</div>
                <div class="aufgabe">${doneNotes[idoneNote]}</div>
                <div class="buttons-alone">
                    <button onclick="movetodonecomplete(${idoneNote})">X</button>
                </div>
            </div>
            `;
}   

