function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    $('.tabcontent--default').css('display', 'none')

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
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