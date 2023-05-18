const saat = document.querySelector(".saat")
const deqiqe = document.querySelector(".deqiqe")
const saniye = document.querySelector(".saniye")

setInterval (vaxt , 100)

    let saatSaygaci = 0;
    let deqiqeSaygaci = 0;
    let saniyeSaygaci = 0;

function vaxt(){
    saniyeSaygaci +=5;
    saniye.style.transform =`rotate(${saniyeSaygaci}deg)`
}
if(saniye ==360){
    deqiqeSaygaci +=5;
    saniyeSaygaci = 0;
    deqiqe.style.transform =`rotate(${deqiqeSaygaci}deg)`


    if (deqiqe ==360) {
        saatSaygaci ++;
        saat.style.transform =`rotate(${saatSaygaci}deg)`
    }
}