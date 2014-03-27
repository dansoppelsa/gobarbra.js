var userName, goButton, mp3;

window.onload = start;


function start()
{
    userName = document.getElementById('user-name');
    goButton = document.getElementById('go-button');
    mp3 = new Audio('audio/barbra.mp3');

    goButton.onclick = handleGoClick;
}


function handleGoClick(e)
{
    e.preventDefault();

    var utterance = new SpeechSynthesisUtterance();
    utterance.text = userName.value;
    utterance.lang = "en-GB";
    utterance.rate = 1.1;
    utterance.volume = 1.0;

    mp3.currentTime = 55;
    mp3.volume = 0.1;
    mp3.play();

    window.setTimeout(function()
    {
        mp3.muted = true;
        speechSynthesis.speak(utterance);

        window.setTimeout(function()
        {
            mp3.muted = false;
        } , 1300);
    } , 6000);

}
