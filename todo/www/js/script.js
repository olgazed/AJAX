	
	/*1. Create todo-list application with simple interface. 
	Application should look like page with 4 areas. 
	Each area should load data via AJAX from 'data[N].json' file 
	(where N - number from 1 to 4).
	Data for 1st area should load with delay in 1 sec, ...,  
	for 4th area - in 4 sec.*/


        
var init = function() {

var request = new XMLHttpRequest();

    request.open("GET", "json/data1.json");

    request.onload = function () {
    var data = JSON.parse(this.response);

    var ul = document.getElementById("urgentTasks");   
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            var dataItem = data[i];
            li.innerHTML = dataItem.task;  
            ul.appendChild(li);  
        }  
    }

    request.send();
}

setTimeout(init, 1000);


var init2 = function() {

var request2 = new XMLHttpRequest();

    request2.open("GET", "json/data2.json");

    request2.onload = function () {
    var data = JSON.parse(this.response);

    var ul = document.getElementById("importantTasks");   
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            var dataItem = data[i];
            li.innerHTML = dataItem.task;  
            ul.appendChild(li);  
        }  
    }

    request2.send();
}

setTimeout(init2, 2000);


var init3 = function() {

var request3 = new XMLHttpRequest();

    request3.open("GET", "json/data3.json");

    request3.onload = function () {
        var data = JSON.parse(this.response);

        var ul = document.getElementById("regularTasks");   
            for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            var dataItem = data[i];
            li.innerHTML = dataItem.task;  
            ul.appendChild(li);  
        }  
    }

    request3.send();
}

setTimeout(init3, 3000);


var init4 = function() {

var request4 = new XMLHttpRequest();

    request4.open("GET", "json/data4.json");

    request4.onload = function () {
    var data = JSON.parse(this.response);

    var ul = document.getElementById("optionalTasks");   
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            var dataItem = data[i];
            li.innerHTML = dataItem.task;  
            ul.appendChild(li);  
        }  
    }

    request4.send();
}

setTimeout(init4, 4000);


/*С промисами я пока не очень разобралась, поэтому сделала без них. 
Получился, конечно не самый идеальный вариант, 
но вроде всё работает так, как нужно в задании.
Как сервер я использовала Денвер.
I'm still not good at promises, so I've tried to do the task without them.
The code is not the best, still, everything seems to work as it should.
I used Denwer as a server.*/



/*const promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'data1.json');
}); 
const promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 2000, 'data2.json');
}); 
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 3000, 'data3.json');
}); 
const promise4 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 4000, 'data4.json');
}); 
Promise.race([promise1, promise2, promise3, promise4]).then((response) => {   

});*/
