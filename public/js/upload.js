//script for the user to upload file and play it 

const { urlencoded } = require("express")


var userUploadFile = function(event) {
    var inputFiles = event.target
    for(var x = 0; x < inputFiles.files.length; x++){
        console.log(inputFiles.files[x].name)
    }
}


var playAudio = function(event){
    var uploadedAudio = document.getElementsByClassName('uploadedAudio') 
    uploadedVideo.src = URL.createObjectURL(this.files[0]);
    uploadedVideo.play()
    
    uploadedAudio.onend = function(e){
        URL.revokeObjectURL(this.src)
    }
}