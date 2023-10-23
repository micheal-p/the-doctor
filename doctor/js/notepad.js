document.getElementById("openNotepad").addEventListener("click", function() {
    var notepadPopup = document.getElementById("notepadPopup");
    
    if (notepadPopup.style.display === "block") {
        notepadPopup.style.display = "none"; 
    } else {
        notepadPopup.style.display = "block"; 
    }
});

document.getElementById("closeNotepad").addEventListener("click", function() {
    document.getElementById("notepadPopup").style.display = "none";
});


document.getElementById("saveReport").addEventListener("click", function() {
   
    document.getElementById("notepadPopup").style.display = "none";
});
