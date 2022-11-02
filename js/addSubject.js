
// Shows "add subject" popup
function addForm() {
    document.getElementById("subjectPopup").style.display = "block";
  }
  

// Gets rid of "add subject" popup
function cancelForm() {
    document.getElementById("subjectPopup").style.display = "none";
  }


// Makes a file with subject name
function submitForm() {
    document.getElementById("subjectPopup").style.display = "none";

    var set1 = document.createElement("div");
        set1.setAttribute("id", "displayBack");
        set1.textContent = document.getElementById("submitBtn").value;
        const box = document.getElementById("body");
        box.appendChild(set1);
  }