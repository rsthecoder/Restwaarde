function calculateRemainingDebt(deviceType) {
    const budgetId = `${deviceType}Budget`;
    const budgetDateId = `${deviceType}Date`;
    const terminationDateId = `${deviceType}TerminationDate`;
    const resultId = `${deviceType}Result`;

    const budget = parseFloat(document.getElementById(budgetId).value);
    const budgetDate = new Date(document.getElementById(budgetDateId).value);
    const terminationDate = new Date(document.getElementById(terminationDateId).value);

    if (isNaN(budget) || isNaN(budgetDate.getTime()) || isNaN(terminationDate.getTime())) {
        document.getElementById(resultId).innerText = "Please fill in all fields.";
        return;
    }

    const monthsUsed = Math.floor((terminationDate - budgetDate) / (30 * 24 * 60 * 60 * 1000));

    if (monthsUsed < 0) {
        document.getElementById(resultId).innerText = "Termination date must be after budget date.";
        return;
    }

    const remainingBudget = budget - (budget / 36) * monthsUsed;

    if (isNaN(remainingBudget) || remainingBudget <= 0) {
        document.getElementById(resultId).innerText = "No remaining budget after this period.";
        return;
    }

    const result = `€${budget.toFixed(2)} from the budget, remaining after ${monthsUsed} months of use: €${remainingBudget.toFixed(2)}`;

    document.getElementById(resultId).innerText = result;
}


function calculateLaptopRemainingDebt() {
    const LaptopPurchasePrice = parseFloat(document.getElementById('LaptopPurchasePrice').value);
    const LaptopPurchaseDate = new Date(document.getElementById('LaptopPurchaseDate').value);
    const LaptopTerminationDate = new Date(document.getElementById('LaptopTerminationDate').value);
    const laptopType = document.querySelector('input[name="laptopType"]:checked').value;
  
    const LaptopMonthsInUse = Math.floor((LaptopTerminationDate - LaptopPurchaseDate) / (30 * 24 * 60 * 60 * 1000));
  
    let LaptopResidualValue = 0;
  
    switch (laptopType) {
      case 'standard':
        if (LaptopMonthsInUse < 48) {
          LaptopResidualValue = (LaptopPurchasePrice - ((LaptopPurchasePrice / 48) * LaptopMonthsInUse));
          residualPercentage = 0.1 * LaptopPurchasePrice;
          percentage = 10;
        } else {
          LaptopResidualValue = 0;
          residualPercentage = 0.1 * LaptopPurchasePrice;
          percentage = 10;
        }
        break;
      case 'power':
        if (LaptopMonthsInUse < 48) {
          LaptopResidualValue = (LaptopPurchasePrice - ((LaptopPurchasePrice / 48) * LaptopMonthsInUse));
          residualPercentage = 0.15 * LaptopPurchasePrice;
          percentage = 15;
        } else {
          LaptopResidualValue = 0;
          residualPercentage = 0.15 * LaptopPurchasePrice;
          percentage = 15;
        }
        break;
      case 'macbook':
        if (LaptopMonthsInUse < 60) {
          LaptopResidualValue = (LaptopPurchasePrice - ((LaptopPurchasePrice / 60) * LaptopMonthsInUse));
          residualPercentage = 0.2 * LaptopPurchasePrice;
          percentage = 20;
        } else {
          LaptopResidualValue = 0;
          residualPercentage = 0.2 * LaptopPurchasePrice;
          percentage = 20;
        }
        break;
    }
  
    const LaptopRemainingDebt = LaptopResidualValue + residualPercentage;
  
    const LaptopResultElement = document.getElementById('LaptopResult');
    //resultElement.innerHTML = `Purchased for ${LaptopPurchasePrice} euros, after ${monthsInUse} months of use, this laptop is ${remainingDebt.toFixed(2)} euros in total (${residualValue.toFixed(2)} euros remaining amount + ${(LaptopPurchasePrice - residualValue).toFixed(2)} euros 10% value).`;
    LaptopResultElement.innerHTML = `Purchased for ${LaptopPurchasePrice} euros, after ${LaptopMonthsInUse} months of use, this laptop is <b>${LaptopRemainingDebt.toFixed(2)}</b> euros in total (${LaptopResidualValue.toFixed(2)} euros remaining amount + ${residualPercentage.toFixed(2)} euros %${percentage.toFixed(2)} value).`;
    
  }