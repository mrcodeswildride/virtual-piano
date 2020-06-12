let keys = document.querySelectorAll(`.white, .black`)
let notesParagraph = document.getElementById(`notesParagraph`)
let playButton = document.getElementById(`playButton`)
let twinkleButton = document.getElementById(`twinkleButton`)

let twinkleNotes = `ccggaag-ffeeddc`
let keyIds = []

for (let key of keys) {
  key.addEventListener(`click`, pressKey)
}

playButton.addEventListener(`click`, play)
twinkleButton.addEventListener(`click`, twinkle)

function pressKey() {
  playNote(this.id)
}

function playNote(keyId) {
  let key = document.getElementById(keyId)

  if (key != null) {
    let note = document.getElementById(`${keyId}Note`)
    note.currentTime = 0
    note.play()
  }

  keyIds.push(keyId)
  notesParagraph.innerHTML = keyIds.join(` `).replace(/Sharp/g, `#`)

  if (key != null) {
    key.classList.add(`selected`)
    setTimeout(clearSelected, 250, key)
  }
}

function clearSelected(key) {
  key.classList.remove(`selected`)
}

function play() {
  let keyIdsToPlay = [...keyIds]

  keyIds = []
  notesParagraph.innerHTML = ``

  for (let i = 0; i < keyIdsToPlay.length; i++) {
    setTimeout(playNote, i * 300, keyIdsToPlay[i])
  }
}

function twinkle() {
  keyIds = twinkleNotes.split(``)
  play()
}