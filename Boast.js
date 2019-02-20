function point(){
	return Math.floor(Math.random()*6)+1;
}

function shake(){
    var dices = $('i');
    for(let i = 0 ; i < dices.length;i++){
        //dices[i].classList.remove('fa-dice');
        dices[i].classList.add('fas');
        let point = Math.floor(Math.random()*6)+1;
        var dice = '<i class="fas ';
        var newdice = document.createElement('i');
        newdice.classList.add('fas');
        switch(point){
            case 1:
                $('i')[i].classList.value ='fas fa-dice-one fa-4x';
                break;
            case 2:
                $('i')[i].classList.value ='fas fa-dice-two fa-4x';
                break;
            case 3:
                $('i')[i].classList.value ='fas fa-dice-three fa-4x';
                break;
            case 4:
                $('i')[i].classList.value ='fas fa-dice-four fa-4x';
                break;
            case 5:
                $('i')[i].classList.value ='fas fa-dice-five fa-4x';
                break;
            case 6:
                $('i')[i].classList.value ='fas fa-dice-six fa-4x';
                break;
        }
    }
}