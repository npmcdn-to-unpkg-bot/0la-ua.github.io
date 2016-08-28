var pow=function (n1, n2) {
     var b;
     if (n2 < 0) {
         b = n1;
         for (var i = 1; i < (n2)  *(-1); i++) {
         b *= n1;
         }
         return 1 / b;
     }
     if (n2 === 0) return 1;
     if (n2 % 2 == 1) return pow (n1, n2 - 1) * n1;
     else {
         b = pow (n1, n2 / 2);
         return b * b;
     }
    };

var isInteger = function (num) {
    if ( parseInt(num) - num === 0 ) return true;
    else return false;
};

var isUser = function (userName, arrNames) {
var chars = 0; var isUser = false;

for (var i = 0; i < arrNames.length; i++) {
    if (arrNames[i].length === userName.length)
        for (var j = 0; j < arrNames[i].length; j++) {
            if (arrNames[i][j] === userName[j]) ++chars;
        }
    if (arrNames[i].length === chars && chars > 0) isUser = true;
    else chars = 0;
};

if (isUser) return true;
else return false;
}

try {
    module.exports = {pow, isInteger, isUser};;
    //module.exports = isInteger;
   // module.exports = inputNum;
} catch (e) {}