const term = document.getElementById('terminal');
const cmd  = document.getElementById('cmd');
const HELP = "Available: help, date, echo <msg>, clear";

function println(txt){
  term.innerHTML += txt + "<br>";
  term.scrollTop = term.scrollHeight;
}

if(cmd){
  println("VisionOS Shell v0.1 – type 'help'");

  cmd.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
      const input = cmd.value.trim();
      cmd.value = '';
      println("> " + input);

      const [c, ...rest] = input.split(' ');
      switch(c){
        case 'help':
          println(HELP); break;
        case 'date':
          println(new Date().toString()); break;
        case 'echo':
          println(rest.join(' ')); break;
        case 'clear':
          term.innerHTML = ''; break;
        default:
          println('Command not found');
      }
    }
  });
}
