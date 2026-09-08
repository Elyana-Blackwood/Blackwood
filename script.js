/* ==================================================
   BLACKWOOD OS
   Script principal
================================================== */

/* -------- OUVERTURE DU DOSSIER HK -------- */

function ouvrirHK() {

    document.getElementById("fenetreHK").style.display = "block";

}

/* -------- FERMER LE DOSSIER HK -------- */

function fermerHK() {

    document.getElementById("fenetreHK").style.display = "none";

}

/* -------- OUVRIR LES NOTES -------- */

function ouvrirNotes() {

    document.getElementById("notes").style.display = "block";

}

/* -------- FERMER LES NOTES -------- */

function fermerNotes() {

    document.getElementById("notes").style.display = "none";

}

/* -------- OUVRIR LES CONCLUSIONS -------- */

function ouvrirConclusions() {

    document.getElementById("conclusions").style.display = "block";

}

/* -------- FERMER LES CONCLUSIONS -------- */

function fermerConclusions() {

    document.getElementById("conclusions").style.display = "none";

}

/* -------- HEURE AUTOMATIQUE -------- */

function mettreAJourHeure() {

    const maintenant = new Date();

    let h = maintenant.getHours().toString().padStart(2, "0");
    let m = maintenant.getMinutes().toString().padStart(2, "0");

    document.getElementById("heure").innerHTML = h + ":" + m;

}

setInterval(mettreAJourHeure,1000);

window.onload = function(){

    mettreAJourHeure();

}
