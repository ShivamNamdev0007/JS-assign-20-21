const startButton = document.getElementById('micro');
const textOutput = document.getElementById('user-input');

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.onresult = (event) => {
    textOutput.value += event.results[0][0].transcript + ' ';
  };

  startButton.addEventListener('click', () => {
    recognition.start();
    startButton.disabled = true;
    textOutput.value='';
  });

  recognition.onend = () => {
    startButton.disabled = false;
  };
} else {
  textOutput.value = "Speech recognition not supported.";
}