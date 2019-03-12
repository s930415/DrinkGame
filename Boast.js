var point = ['one','two','three','four','five','six']
var dices = $('i');

function randomPoint(){
	return Math.floor(Math.random()*6)+1;
}

function shake (){
    for(let i = 0 ; i < dices.length ; i++){
        dices[i].classList.value ='fas fa-dice-'+point[randomPoint()-1]+' fa-4x';
    }
}

function remove(){
    if(dices.length === 0 ){
        dices = $('i');
    }else{
        dices.splice(0,1);
    }
}

var si = setInterval(shake,100);