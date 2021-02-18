$( document ).ready(function() {
    
    // Global variables   
    let computerChoice=Math.floor((Math.random() * 3) + 1);   
    let imageNumber=$(".image-selection").attr('value');
    let computerArray = {1: 'paper', 2: 'rock', 3: 'scissors'}
    let userArray = {'1': 'paper', '2': 'rock', '3': 'scissors'}

    // Disable click outside from disabling modal
    $('#start').modal({
        backdrop: 'static',
        keyboard: false
    })
    
    // Open/hide modal when starting
    $("#start").modal("show");
    
    gameOn()

    function gameOn() { 
                        
        $(".image-selection").attr('value', '1');
        $(".selected-image").attr('src', "images/paper.svg");                          
        
       // Logic to change images using left arrow
        $('.arrow-left').click(function(){
            document.getElementById("myAudio1").play(); 
            imageNumber=$(".image-selection").attr('value');            
            if(imageNumber==='1'){
                $(".image-selection").attr('value', '3');
                imageNumber='3';
                $(".selected-image").attr('src', "images/scissors.svg");            
            }
            else if(imageNumber==='2'){
                $(".image-selection").attr('value', '1');
                imageNumber='1';
                $(".selected-image").attr('src', "images/paper.svg");             
            }
            else if(imageNumber==='3'){
                $(".image-selection").attr('value', '2');
                imageNumber='2'; 
                $(".selected-image").attr('src', "images/rock.svg");              
            }
            return imageNumber
        })

        // Logic to change images using right arrow
        $('.arrow-right').click(function(){
            document.getElementById("myAudio1").play(); 
            imageNumber=$(".image-selection").attr('value');                      
            if(imageNumber==='1'){
                $(".image-selection").attr('value', '2');
                imageNumber='2'; 
                $(".selected-image").attr('src', "images/rock.svg");                        
            }
            else if(imageNumber==='2'){
                $(".image-selection").attr('value', '3');
                imageNumber='3'; 
                $(".selected-image").attr('src', "images/scissors.svg");
                            
            }
            else if(imageNumber==='3'){
                $(".image-selection").attr('value', '1');
                imageNumber='1'; 
                $(".selected-image").attr('src', "images/paper.svg");                         
            }            
        })

        // Display modal when game finishes
        $(".modal-finish").click(function(){
            $('#finish').modal({
                backdrop: 'static',
                keyboard: false
            })
            $("#finish").modal('show');
            imageNumber=$(".image-selection").attr('value');
            computerChoice=Math.floor((Math.random() * 3) + 1);                      
            // Logic to decide winner
            if(imageNumber==='1' && computerChoice===1){
                $('.end-result').html("It's a draw!");                
            }
            else if(imageNumber==='2' && computerChoice===2){
                $('.end-result').html("It's a draw!");
            }
            else if(imageNumber==='3' && computerChoice===3){
                $('.end-result').html("It's a draw!");
            }
            else if(imageNumber==='1' && computerChoice===2){
                $('.end-result').html("You Win!");
            }
            else if(imageNumber==='1' && computerChoice===3){
                $('.end-result').html("You Lose!");
            }
            else if(imageNumber==='2' && computerChoice===1){
                $('.end-result').html("You Lose!");
            }
            else if(imageNumber==='2' && computerChoice===3){
                $('.end-result').html("You Win!");
            }
            else if(imageNumber==='3' && computerChoice===1){
                $('.end-result').html("You Win!");
            }
            else if(imageNumber==='3' && computerChoice===2){
                $('.end-result').html("You Lose!");
            }

            let userSymbol=userArray[imageNumber]
            let computerSymbol=computerArray[computerChoice]
            
            $(".user-image").attr("src","images/" + userSymbol + ".svg");

            $(".computer-image").attr('src', "images/" + computerSymbol + ".svg");         
        }) 
        
        // Restart game 
        $(".game-finish").click(function(){                                                                                  
            gameOn();                        
        })
    }    
});

