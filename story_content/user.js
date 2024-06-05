function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xI0aiefiew":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="music.mp3";
audio.load();
audio.play();

}

