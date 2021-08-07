let mybackground;
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let direction = document.querySelector('#direction');
let code = document.querySelector('#code');
let form = document.querySelector('#form');
let codeWrap = document.querySelector('.codeWrap');
let copyCode=document.querySelector('.copy');


form.addEventListener('submit',(e)=>{
    e.preventDefault();



    let color1Val = color1.value;
    let color2Val = color2.value;
    let directionVal = direction.value;

  
    mybackground = `linear-gradient(to ${directionVal}, ${color1Val}, ${color2Val})`;
    
    
    codeWrap.style.display='block';
    // code.textContent = mybackground;


    document.body.style.backgroundImage = mybackground;

    
 
    copyText();



})

let textInput;
function copyText() {



    copyCode.addEventListener('click', (e) => {
        e.preventDefault();
        let text = mybackground;

      
         textInput = document.createElement('textarea');
        

        if (textInput.value.length===0) {
            console.log('start first');
            textInput.value = text;
            codeWrap.append(textInput);

            textInput.select();
            document.execCommand("copy");
           

            alert('code copied successfully');


        } else if (textInput.value.length > 0) {
            console.log('start secnd');
            console.log(textInput.value.length);
            textInput.value = text;

            textInput.select();
            document.execCommand("copy");
            alert('code copied successfully');

        }
        else {
            console.log('some thing wrong !');
        }

        
    })
}