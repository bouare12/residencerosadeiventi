$(document).ready(function(){
    
    var $pseudo = $('#pseudo'),
        $mdp = $('#mdp'),
        $confirmation = $('#confirmation'),
        $mail = $('#mail'),
        $envoi = $('#envoi'),
        $reset = $('#rafraichir'),
        $erreur = $('#erreur'),
        $champ = $('.champ');

    $champ.keyup(function(){
        if($(this).val().length < 5){ 
            $(this).css({ 
                borderColor : 'red',
	        color : 'red'
            });
         }
         else{
             $(this).css({ 
	         borderColor : 'green',
	         color : 'green'
	     });
         }
    });

    $confirmation.keyup(function(){
        if($(this).val() != $mdp.val()){ 
            $(this).css({ 
     	        borderColor : 'red',
        	color : 'red'
            });
        }
        else{
	    $(this).css({ 
	        borderColor : 'green',
	        color : 'green'
	    });
        }
    });

    $envoi.click(function(e){
        e.preventDefault(); 

        
        verifier($pseudo);
        verifier($mdp);
        verifier($confirmation);
        verifier($mail);
    });

    $reset.click(function(){
        $champ.css({ 
            borderColor : '#ccc',
    	    color : '#555'
        });
        $erreur.css('display', 'none'); 
    });

    function verifier(champ){
        if(champ.val() == ""){ 
    	    $erreur.css('display', 'block'); 
            champ.css({ 
    	        borderColor : 'red',
    	        color : 'red'
    	    });
        }
    }

});
