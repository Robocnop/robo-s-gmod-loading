var totalFiles = 0;
var downloadedFiles = 0;

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    document.getElementById('servName').innerHTML = servername;
    document.getElementById('map').innerHTML = mapname;
    document.getElementById('gameMode').innerHTML = gamemode;

    if (gamemode === "fnafhunt") {
        document.getElementById('gm-icon').src = "img/gamemodesIcons/fnafhunt.png";
    }
}

function SetStatusChanged(status) {
    document.getElementById('stateLoad').innerHTML = status;
}

function SetFilesNeeded(needed) {
    totalFiles = needed;
}

function DownloadingFile(fileName) {
    downloadedFiles++;
    
    if (totalFiles > 0) {
        var percentage = (downloadedFiles / totalFiles) * 100;
        document.getElementById('loadBar-width').style.width = percentage + "%";
    }

    document.getElementById('stateLoad').innerHTML = "Téléchargement : " + fileName;
}