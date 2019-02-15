function initSexButtom(){
    $('.people .chose-sex i').click(function(){
        this.parentElement.parentElement.getElementsByTagName('i')[0].classList.remove('sex-checked');
        this.parentElement.parentElement.getElementsByTagName('i')[1].classList.remove('sex-checked');
        this.classList.remove('fa-lg');
        this.classList.add('sex-checked');
        this.parentElement.parentElement.getElementsByTagName('input')[1].value = this.parentElement.dataset.sex;
    });
    $('.people .remove-sex').click(function(){
        this.parentElement.remove();
    });
}

initSexButtom();

$('#add-people').click(function(){
    $('.people-area').html($('.people-area').html()+$('.new-people-example').html());
    initSexButtom();
});

$('.setting > a').click(function(){
    console.log(this.dataset.link);
    $('.area').hide();
    $(this.dataset.link).show();
});