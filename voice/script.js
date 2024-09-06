const startButton = document.getElementById('startButton');
const textOutput = document.getElementById('textOutput');

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.onresult = (event) => {
    textOutput.value += event.results[0][0].transcript + ' ';
  };

  startButton.addEventListener('click', () => {
    recognition.start();
    startButton.disabled = true;
  });

  recognition.onend = () => {
    startButton.disabled = false;
  };
} else {
  textOutput.value = "Speech recognition not supported.";
}