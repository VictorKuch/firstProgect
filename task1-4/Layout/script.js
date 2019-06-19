var money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == null || money == ""){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
}
start()

var appData = {
    budget : money,
    timeData : time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: true,
    chooseExpenses : function(){
        for(let i = 0; i<2;i++){
            let a = prompt("Введите обязательную статью расходов ", "");
                b = prompt("Во сколько обойдется", "");            
                   
        if((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
           && a != '' && b != '' && a.length < 50){
            appData.expenses[a]=b;
            console.log('Done');
        }
        else{
           i=i-1;  
        }
        };
    },
    detectDayBudget : function(){
        appData.MoneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный доход: " + appData.MoneyPerDay);
    },
    detectLevel : function(){
        if(appData.MoneyPerDay<100){
            console.log('Низкий уровень дохода');
        }
        else if(appData.MoneyPerDay>100 && appData.MoneyPerDay<1000){
            console.log('Средний уровень дохода');
        }
        else if(appData.MoneyPerDay>1000){
            console.log('Высокий уровень дохода');
        }
        else{
            console.log('Error');
        }
    },
    checkSavings : function(){
        if(appData.savings == true){
            let question = +prompt("Какова сумма накоплений?"); 
                percent = +prompt("Под какой процент");
            
            appData.monthIncome = question/12/100*percent;        
            alert("Сумма накоплений за месяц: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


