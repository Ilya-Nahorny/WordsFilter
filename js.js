(function(){
    const input = document.getElementById('input');
    const checkbox = document.getElementById('checkbox');
    const firstBtn = document.getElementById('firstBtn');
    const secondBtn = document.getElementById('secondBtn');
    const output = document.getElementById('output');
    let checked = false;
    const url = 'https://cors-anywhere.herokuapp.com/https://mrsoft.by/data.json';
    let arrData;

    // подгрузка JSON-файла
    let  fetchAsyncData = function(){
        const request = fetch(url)
        .then(response => response.json())
        var jsn = request.then(arr => {
            arrData = arr.data;
        })
        .catch(error => {
        console.error("Error:", error);
        });
    };
    //Функция фильтра по длине строки
    let firstBtnFunc = function(){
        if(Number(input.value)) {
            let result = '';
            for (var key in arrData){
                // let result = arrData.filter(word => word.length > input.value);  //  решение методом filter()
                if(input.value < arrData[key].length){
                    result += arrData[key]+'<br>';
                    output.innerHTML = result;
                } else {output.innerHTML = result  || 'Такой длинной строки нет';}
            }
        } else {output.innerHTML  = 'Для данной операции необходимо ввести число'};
    };
    //функуия фильтра по подстроке
    let secondBtnFunc = function(){
        if(isNaN(input.value)){
            let result = '';
            if(checkbox.checked){ // проверка чекбокса
                for(var key in arrData){ // перебор свойств объекта
                    if(arrData[key].indexOf(input.value) >= 0){
                        result += arrData[key]+'<br>';
                        output.innerHTML = result;
                    } else if(input.value !== arrData[key]){output.innerHTML = result  || 'Такой строки нет'}
                }
            } else {
                for (var key in arrData){// перебор свойств объекта
                    if(arrData[key].toUpperCase().indexOf((input.value).toUpperCase()) >= 0){
                        result += arrData[key]+'<br>';
                        output.innerHTML = result;
                    } else if(input.value !== arrData[key]){output.innerHTML = result  || 'Такой строки нет'}
                }
            }        
        }
        else {output.innerHTML  = 'Для данной операции необходимо ввести слово(строку)'}
    };

    fetchAsyncData();
    firstBtn.addEventListener('click', firstBtnFunc);
    secondBtn.addEventListener('click', secondBtnFunc);
})();
console.log(url);