// colors=["red","blue","green"];
// colors.forEach(color => {
//     // console.log(color);
// });
// nums=[1,2,3,4,5];
// var sum=0;
// // nums.forEach(function(num){
// //  sum+=num;

// // })
// function adder(num){
//      sum+=num;
// }
// // nums.forEach(adder)
// console.log(sum);

// nums=[1,2,3,4,5];
// dbnums=[];
// var db=nums.map(function(n){
// return n*2;
// })
// console.log(db);

// cars=[
//     {"model":'bk',"price":'100'},
//     {"model":'bmw',"price":'200'}
// ]
// var newDb=cars.map(function(car){
//     return car.model;
// })
// console.log(newDb);


// cars=[
//     {"model":'bk',"price":'100'},
//     {"model":'bk',"price":'200'},
//     {"model":'bmw',"price":'200'}
// ]
// var newDb=cars.filter(function(car){
//     return car.model=='bk' && car.price<200;
// })
// console.log(newDb);

car={"carId":"01"}

cars=[
    // {"id":"01","model":'bk',"price":'100'},
    {"id":"01","model":'bk',"price":'200'},
    {"id":"02","model":'bmw',"price":'200'},
    {"id":"03","model":'bz',"price":'200'}
]
var newDb=cars.filter(function(car){
    return car.model=='bk' && car.price<90;
})
function carFilter(cId,cars){
    return  cars.filter(function(item){
       return item.id==cId.carId;
    })
}
// function carFilter(cId,cars){
//     return  cars.find(function(item){
//        return item.id==cId.carId;
//     })
// }
console.log(carFilter(car,cars));


// cars=[
//     // {"id":"01","model":'bk',"price":'100'},
//     {"id":"01","model":'bk',"price":'200'},
//     {"id":"02","model":'bmw',"price":'200'},
//     {"id":"03","model":'bz',"price":'200'}
// ]

function feild(val){
    this.val=val;
}

feild.prototype.validate=function(){
    return this.val.length>0;
}
var uName=new feild('');
var phone=new feild('136');
var age=new feild('32');

datas=[uName,phone,age];

var isTrue=datas.every(function(item){
    return item.validate()
})
console.log(isTrue);











