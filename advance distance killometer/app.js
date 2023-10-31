(function(){
    //declearing the variable we need to work with
    var converttype='miles'
    var head=document.getElementById('text1')
    var head2=document.getElementById('text2')
    var answer=document.getElementById('answer')
    var form=document.getElementById('form')

    /*now we add two event listener 
    one would handle a keyevent while
    another would handle a submit event*/
    document.addEventListener('keydown',function(e){
        //this would handle the keydown event
        var key=e.code
        if(key==='KeyK'){
            //we want to change the heading
            //we want to change the paragraph
            //change the value of the converttype
            converttype='killometer'
            head.innerText='killometer to miles converter'
            head2.innerText='type in a number of kilometer and click the botton to convert'
        }
        else if(key=='KeyM'){
            converttype='miles'
            head.innerText='miles to kilometer converter' 
            head2.innerHTML='<p>'+'type in a number of miles and click the botton to convert'+'</p> '
        }
    })
    form.addEventListener('submit',function(e){
        //this would handle the submit event
         e.preventDefault()
         var distance=document.getElementById('distance').value
         distance=parseFloat(distance)
         if(distance){
            //if distance is a number run the function
            //convert miles to kilo 1.609344
            //convert kilo to miles 0.621371192
             
            if (converttype=='miles'){
                //when converttype is equal to miles it should run the following
                var converted=distance*1.609344
                converted.toFixed(3)
                answer.innerText= distance+'miles convert to '+converted.toFixed(3)+'kilometer'
            }
            else{
                var converted=distance*0.621371192
                converted.toFixed(3)
                answer.innerText= distance+'kilometer convert to '+converted.toFixed(3)+'miles'
            }
         }
         else{
            //display not a number
            answer.innerText='please what you inputed was not a number'
         }
    })
}())