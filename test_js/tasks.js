// Задача №1 //
    console.log('--- №1 ---')
    var summation = function (num) {
        let summNombers = 0;
        
        for (i = 1; i <= num; i++){
        summNombers += i;
        
        }
        return  console.log(summNombers);
    }
    summation(8);
// Задача №2 //
console.log('--- №2 ---')

    function boolToWord(bool) {
        if(bool === true){
            return console.log('Yes');
        }
        else {
            return console.log('No');
        }
    }
    boolToWord(true);

// АЛЬТЕРНАТИВНЫЙ КОД - куда проще и короче! 
    console.log('---')

    function boolToWord_2( bool ){
        return bool ? console.log('Yes'):console.log('No');
    }
    boolToWord_2(true);

    console.log('---');

