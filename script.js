const videoElement = document.getElementById('video');
const button = document.getElementById('start-button');
const mediaButton = document.getElementById('media-button');
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    } catch(err) {
        console.log(err);
    }

}
button.addEventListener('click',async () =>{
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
    });
    
mediaButton.addEventListener('click', () =>{
    mediaButton.disabled = true;
    selectMediaStream();
    mediaButton.disabled = false;
});
            
