function openTab(evt, identificador) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    $('.tabcontent--default').css('display', 'none')

    document.getElementById(identificador).style.display = "block";
    evt.currentTarget.className += " active";

    if($(evt.currentTarget).hasClass('tablinks')){
        $(evt.currentTarget).addClass(' active')
    }
    else{
        id = $(evt.currentTarget).attr('data-producto')
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            if($(evt.currentTarget).attr('data-producto') == $(tablinks[i]).attr('data-producto')){
                tablinks[i].className = tablinks[i].className += " active";
            }
        }
    }

}