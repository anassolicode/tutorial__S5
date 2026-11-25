
// function aa(a , b){
//     if(a > b){
//         return a
//     }
//     return b
// }

// let maxu = aa(20 , 30) ;
// console.log("le number max" , maxu);


function calculerSurface(longueur , largeur){
    return longueur * largeur ;

}



function estGrand(surface){
    return surface >= 100 ;
}

let surfacePiece = calculerSurface(12 , 10);
let grandePiece = estGrand(surfacePiece);


console.log("surface calculée : " + surfacePiece +" m²");
console.log("grande piéce : " + grandePiece);