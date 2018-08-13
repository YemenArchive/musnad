    function changeFont(font){
        document.getElementById("musnad").className = font.value + " " + "input" ;
    }
    function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}
    var tCtx = document.getElementById('textCanvas').getContext('2d'),
    imageElem = document.getElementById('image');
document.getElementById('musnad').addEventListener('keyup', function (){
  tCtxFont = css(musnad, 'font-family');
    tCtx.canvas.width = tCtx.measureText(this.value).width + 400;
    tCtx.font = '40px ' + tCtxFont;
    tCtx.direction = "rtl";
    tCtx.fillStyle = "#191e3f";
    tCtx.textAlign = "start";
    tCtx.fillText(this.value + " " + "\u2022" + " " + "مسند", 10, 40);
}, false);
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}
document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'textCanvas', 'musnad.png');
}, false);
ar = ["أ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","ء","آ","ؤ","إ","ئ","ا","ﻻ","ى","$"," ","\n"],
osa =["\uD802\uDE71","\uD802\uDE68","\uD802\uDE69","\uD802\uDE7B","\uD802\uDE74","\uD802\uDE62","\uD802\uDE6D","\uD802\uDE75","\uD802\uDE79","\uD802\uDE67","\uD802\uDE78","\uD802\uDE6A","\uD802\uDE66","\uD802\uDE6E","\uD802\uDE73","\uD802\uDE77","\uD802\uDE7C","\uD802\uDE72","\uD802\uDE76","\uD802\uDE70","\uD802\uDE64","\uD802\uDE6B","\uD802\uDE61","\uD802\uDE63","\uD802\uDE6C","\uD802\uDE60","\uD802\uDE65","\uD802\uDE7A","\uD802\uDE71","\uD802\uDE71","\uD802\uDE71","\uD802\uDE71","\uD802\uDE71","\uD802\uDE71","\uD802\uDE71\uD802\uDE61","\uD802\uDE71","\uD802\uDE6F","|","\n"];
function texttrans() {
  var text = document.getElementById("musnad").value;
code=text.trim().replace(/_|¯|—|–/g,"-").split('');
        translated="";
        for(var i in code){
          if (typeof osa[ar.indexOf(code[i])] === "undefined") {translated+=code[i]}
            else
            translated+=osa[ar.indexOf(code[i])];
        }
  document.getElementById("musnad").value = translated;
}
  
function texttrans2() {
  var text = document.getElementById("musnad").value;
code=text.trim().split(/(?=[\s\S])/u);
        translated="";
         for(var i in code){
          if (typeof ar[osa.indexOf(code[i])] === "undefined") {translated+=code[i]}
            else
            translated+=ar[osa.indexOf(code[i])];
        }
  document.getElementById("musnad").value = translated;
}
  
  