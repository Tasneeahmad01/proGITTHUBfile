const startButton = document.getElementById('vid');
const screenShareVideo = document.getElementById('Share');

startButton.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    screenShareVideo.srcObject = stream;
  } catch (error) {
    console.error('Error accessing screen:', error);
  }
});




