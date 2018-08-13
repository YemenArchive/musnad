let Keyboard = window.SimpleKeyboard.default;
let selectedInput;
let myKeyboard = new Keyboard({
  newLineOnEnter: true,
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  theme: "hg-theme-default hg-layout-default myTheme",
  layout: {
    default: [
      "{bksp} \uD802\uDE75 \uD802\uDE74 \uD802\uDE62 \uD802\uDE6D \uD802\uDE60 \uD802\uDE72 \uD802\uDE76 \uD802\uDE70 \uD802\uDE64 \uD802\uDE7B \uD802\uDE6E \uD802\uDE73",
      "\uD802\uDE77 \uD802\uDE6B \uD802\uDE63 \uD802\uDE6C \uD802\uDE69 \uD802\uDE71 \uD802\uDE61 \uD802\uDE68 \uD802\uDE7A \uD802\uDE6A \uD802\uDE66",
      "\uD802\uDE6F \uD802\uDE79 \uD802\uDE7C \uD802\uDE78 \uD802\uDE65 \uD802\uDE69 \uD802\uDE67 \uD802\uDE71 \uD802\uDE7F \uD802\uDE7E \uD802\uDE7D",
      "{space} {copy}"
    ]
  },
  display: {
  '{bksp}': ' حذف ',
  '{copy}': 'نسخ',
  '{space}': 'مسافة '
}
});

document.querySelectorAll('.input')
  .forEach(input => {
    input.addEventListener('focus', onInputFocus);
    input.addEventListener('change', onInputChange);
  });

function onInputFocus(event){
  selectedInput = `#${event.target.id}`;

  myKeyboard.setOptions({
    inputName: event.target.id
  });
}
function onInputChange(event) {
  myKeyboard.setInput(event.target.value, event.target.id);
} 
function onChange(input) {
  document.querySelector(selectedInput || ".input").value = input;

}

function onKeyPress(button) {
  console.log("Button pressed", button)
     if(button === "{copy}")
this.myCopy();

}

function myCopy() {
  var copyText = document.getElementById("musnad");
  copyText.select();
  document.execCommand("copy");
  alert("تم نسخ: " + copyText.value);
} 

