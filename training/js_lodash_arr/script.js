var datas = JSON.parse(dat);

 //1. Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов, 
 //так же они должны быть отсортированы по алфавиту; 

var r1 =  _.sortBy (_.uniq(  _.flatten( _.map(datas, 'skills') ) ) );

console.log("unique skills:");
console.log(r1);
//2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей 
//(friends); 

var r2 = [];
var r3 = [];

_(datas).forEach(function(key) {
    var t = _.pick(key, ['name', 'friends']);
    r2.push([t.name, t.friends.length]);
    r3.push(_.map(t.friends, 'name'));
})
var r2_1 = _.sortBy( r2, r2[0]);
console.log('');
console.log('with friends:');
_(r2_1).forEach(function(key) {
    console.log(key[0], key[1]);
});


//3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей

var r3_1 = _.sortBy (_.uniq((_.flatten(r3))));
console.log('');
console.log('all friends:');
console.log(r3_1);