let startBtn = document.getElementById('start'),
    BudgetValue = document.getElementsByClassName('budget-value')[0],
    DayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    LevelValue = document.getElementsByClassName('level-value')[0],
    ExpensesValue = document.getElementsByClassName('expenses-value')[0],
    OptionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    IncomeValue = document.getElementsByClassName('income-value')[0],
    MonthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    YearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

    expensesItem = document.querySelectorAll('.expenses-item');
    chooseExpenses = document.getElementsByClassName('choose-expenses'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#income'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent');
    checkSavings = document.querySelector('#savings');

    let money, time;


startBtn.addEventListener('click',function(){

    if (!yearValue || !monthValue || !dayValue) {
        console.error('date is invalid');
        return;
    }
	money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
	}
	appData.budget = money;
	appData.timeData = time;
    BudgetValue.textContent = money.toFixed();
    yearValue.value = new Date(time).getFullYear();
	monthValue.value = new Date(time).getMonth()+1;
    dayValue.value = new Date(time).getDate();        
});

expensesItemBtn.addEventListener('click',function(){
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {    
            console.log ("done");    
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log ("bad result");
            i--;
        }    
    }
    ExpensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        OptionalexpensesValue.innerHTML += appData.optionalExpenses[i] + " "; 
        console.log(appData.optionalExpenses);
    }
});

countBudgetBtn.addEventListener('click',function(){    
    if(appData.budget != undefined){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        DayBudgetValue.innerHTML = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
                LevelValue.innerHTML="Это минимальный уровень достатка!";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                LevelValue.innerHTML = "Это средний уровень достатка!";
            } else if (appData.moneyPerDay > 2000) {
                LevelValue.innerHTML = "Это высокий уровень достатка!";
            }else {
                LevelValue.innerHTML = "Заполните расчет!";
            } 
    }else {
        LevelValue.innerHTML = "Заполните расчет!";
    }
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    IncomeValue.textContent = appData.income; 
});

checkSavings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});
sumValue.addEventListener('input',function(){
     if(appData.savings == true){
        let sum  = +sumValue.value;
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        MonthsavingsValue.innerHTML = appData.monthIncome.toFixed(1);
        YearsavingsValue.innerHTML = appData.yearIncome.toFixed(1);    
     } 
});
percentValue.addEventListener('input',function(){
    if(appData.savings == true){
        let sum  = +sumValue.value;
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        MonthsavingsValue.innerHTML = appData.monthIncome.toFixed(1);
        YearsavingsValue.innerHTML = appData.yearIncome.toFixed(1); 
    }
});


   
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


