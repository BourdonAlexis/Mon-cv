function opentabs(evt, tabName) {
    // Declare toutes les variables
    var i, tabcontent, tablinks;

    // Obtiens tout les elements avec la class="tabcontent" et les caches
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Obtiens tout les elements avec la class="tablinks" et retire la classe "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // regarde la tab courante , et ajoutez une classe "active" au bouton qui a ouvert l'onglet
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";


}