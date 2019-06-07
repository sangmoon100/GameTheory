

function Randomize(range1, range2) {
    return range1 + Math.floor(Math.random()*(range2 - range1 + 1));
}

function Randomize(range) {
    return Randomize(0, range);
}

function RandomizeArray(r1, r2, cnt) {
    var result = Array(cnt);
    
    
    for (var i = 0; i < result.length; i++) {
        var tmp;
        tmp = Randomize(r1,r2);
        // duplicate check
        while(result.includes(tmp)){
            tmp = (result.includes(tmp)) ? Randomize(r1,r2) : tmp;
        }
        result[i] = tmp;
    }
    
    return result;
}

console.log(RandomizeArray(1,45,6));