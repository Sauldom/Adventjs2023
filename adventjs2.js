/*const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []*/

function manufacture (gifts,materials){
    let toManufacturate=[];
    for(let i=0;i<gifts.length;i++){
        let found=[]
        for(let j=0;j<gifts[i].length;j++){
            if(materials.includes(gifts[i][j])){
                
                found.push(j);
            } 
        }
        if(found.length ===gifts[i].length){
            toManufacturate.push(gifts[i])
        }
    }
    return toManufacturate;
}

var gifts = ['tren', 'oso', 'pelota'];
var materials = 'tronesa';

console.log(manufacture(gifts, materials));
var gifts = ['juego', 'puzzle']
var materials = 'jlepuz'

console.log(manufacture(gifts, materials));

var gifts = ['libro', 'ps5']
var materials = 'psli'

console.log(manufacture(gifts, materials));

