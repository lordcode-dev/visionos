const term = document.getElementById('terminal');
const cmd  = document.getElementById('cmd');
const HELP = "Available commands: help, date, echo <msg>, clear";

function println(txt) {
  term.innerHTML += txt + "<br>";
  term.scrollTop = term.scrollHeight;
}

if(cmd){
  println("VisionOS Shell v1.0 – type 'help'");

  cmd.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
      const input = cmd.value.trim();
      cmd.value = '';
      println("> " + input);

      const [command, ...args] = input.split(" ");
      switch (command) {
        case "help":
          println(HELP); break;
        case "date":
          println(new Date().toString()); break;
        case "echo":
          println(args.join(" ")); break;
        case "clear":
          term.innerHTML = ""; break;
        default:
          println("Command not found");
      }
    }
  });
}
