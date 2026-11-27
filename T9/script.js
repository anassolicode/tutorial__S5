// let notes1 = [12, 14, 16];
// let notes2 = [10, 20];


// function cal(tabl){
//     let some = 0 ; 
//     for(let i = 0 ; i < tabl.length ; i++){
//         some = some + tabl[i];
//     }
//     return some;
// }

// function Som(tab){
//     let comptur = 0;
//     for(let a = 0 ; a < tab.length ; a++){

//         if(tab[a] > 15){
//             comptur++
//         }

//     }
//     return comptur
// }




// function maximum(tablou){
//     let maxi = tablou[0];
//     for(let r = 1 ; r < tablou.length; r++){
//         if(tablou[r] > maxi){
//             maxi = tablou[r]
//         }
//     }
//     return maxi
// }

// console.log(maximum(notes1));
// console.log(maximum(notes2));
// console.log(cal(notes2));
// console.log(cal(notes2));
// console.log(Som(notes1));
// console.log(Som(notes2));



let notes = [10 , 20, 15 , 2]

function calculerMoyenne(notes) {
    let some = 0 ;
    for(let i = 0 ; i < notes.length ; i++){
        some += notes[i];
    }
    return some / notes.length
}
groupeA = [12, 14, 16] 
groupeB = [10, 18, 11, 13]
console.log(calculerMoyenne(groupeA))
console.log(calculerMoyenne(groupeB))