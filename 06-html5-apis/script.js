var db;

function iniciar() {
    //-------------indexedDB------------------------//
    zonadatos = document.getElementById("zonaDatos");
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    if (window.indexedDB) {
        console.log("soporta indexedDB");
        var dataBase = window.indexedDB.open("MisDatos", 1);
        dataBase.onsuccess = function(event) {
            console.log("se creo la base de datos indexedDB");
            db = event.target.result;
        }
        dataBase.onerror = function(event) {
            console.log("no funciono la base de datos amigo");
        }
        dataBase.onupgradeneeded = function(event) {
            db = event.target.result;
            db.createObjectStore("dato", {
                keyPath: "dato"
            });
        }
    } else {
        console.log("no soporta indexedDB");
    }


    //----------------LOCALSTORAGE---------------
    if (localStorage["localstorage"]) {
        var local = localStorage["localstorage"];
        document.getElementById("localstorage").value = local;
    }
    document.getElementById("save").addEventListener("click", function() {
        var local = document.getElementById("localstorage").value;
        localStorage.setItem("localstorage", local);
        console.log("data saved: " + local);
        //----------IndexedDB----------------------------//
        var trans = db.transaction(["dato"], "readwrite");
        var saved = trans.objectStore("dato");
        var add = saved.add({
            dato: local
        });
        add.addEventListener("success", Show, false);
        //----------------------------------------------//
    });
    document.getElementById("clear").addEventListener("click", function() {
        document.getElementById('localstorage').value = "";
        localStorage.clear();
    });

    function handleFileSelect(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files; // FileList object.
        var reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('drop_zone').value = event.target.result;
        }
        reader.readAsText(files[0], "UTF-8");
    }

    function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }

    // Setup the dnd listeners.
    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
}

function Show() {
    zonadatos.innerHTML = "";
    var trans = db.transaction(["dato"], "readonly");
    var almacen = trans.objectStore("dato");
    var cursor = almacen.openCursor();
    cursor.addEventListener("success", showData, false);
}

function showData(event) {
    var cursor = event.target.result;
    if (cursor) {
        zonadatos.innerHTML += "<div>" + cursor.value.dato + "</div>";
        cursor.continue();
    }
}
window.addEventListener("load", iniciar, false);
