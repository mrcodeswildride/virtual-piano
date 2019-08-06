var keys = document.querySelectorAll(".whiteKey, .blackKey");
var notesDisplay = document.getElementById("notes");
var playNotesButton = document.getElementById("playNotes");
var twinkleButton = document.getElementById("twinkle");

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", pressKey);
}

playNotesButton.addEventListener("click", playNotes);
twinkleButton.addEventListener("click", twinkle);

function pressKey() {
    var id = this.getAttribute("id");
    var note = document.getElementById(id + "Note");
    var noteOutput = id.replace("Sharp", "#");

    this.classList.add("selected");
    note.currentTime = 0;
    note.play();

    if (notesDisplay.innerHTML == "") {
        notesDisplay.innerHTML = noteOutput;
    }
    else {
        notesDisplay.innerHTML += " " + noteOutput;
    }

    setTimeout(clearSelected, 250, this);
}

function clearSelected(key) {
    key.classList.remove("selected");
}

function playNotes() {
    var notes = notesDisplay.innerHTML.split(" ");
    notesDisplay.innerHTML = "";

    for (var i = 0; i < notes.length; i++) {
        setTimeout(playNote, i * 300, notes[i]);
    }
}

function playNote(note) {
    if (note == "c") {
        keys[0].click();
    }
    else if (note == "c#") {
        keys[1].click();
    }
    else if (note == "d") {
        keys[2].click();
    }
    else if (note == "d#") {
        keys[3].click();
    }
    else if (note == "e") {
        keys[4].click();
    }
    else if (note == "f") {
        keys[5].click();
    }
    else if (note == "f#") {
        keys[6].click();
    }
    else if (note == "g") {
        keys[7].click();
    }
    else if (note == "g#") {
        keys[8].click();
    }
    else if (note == "a") {
        keys[9].click();
    }
    else if (note == "a#") {
        keys[10].click();
    }
    else if (note == "b") {
        keys[11].click();
    }
    else if (note == "-") {
        if (notesDisplay.innerHTML == "") {
            notesDisplay.innerHTML = "-";
        }
        else {
            notesDisplay.innerHTML += " -";
        }
    }
}

function twinkle() {
    notesDisplay.innerHTML = "c c g g a a g - f f e e d d c";
    playNotes();
}
