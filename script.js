function calculateLaptopRemainingDebt() {
    const LaptopPurchasePrice = parseFloat(document.getElementById('LaptopPurchasePrice').value);
    const LaptopPurchaseDate = new Date(document.getElementById('LaptopPurchaseDate').value);
    const LaptopTerminationDate = new Date(document.getElementById('LaptopTerminationDate').value);
    const laptopType = document.querySelector('input[name="laptopType"]:checked').value;
  
    const LaptopMonthsInUse = Math.floor((LaptopTerminationDate - LaptopPurchaseDate) / (30 * 24 * 60 * 60 * 1000));
    let LaptopRemainingMonths = 0;
    let LaptopPerMonthOff = 0;
  
    let LaptopResidualValue = 0;
  
    switch (laptopType) {
      case 'standard':
        if (LaptopMonthsInUse < 48) {
          LaptopResidualValue = ((LaptopPurchasePrice * 0.90) / 48) * (48 - LaptopMonthsInUse));
          residualPercentage = 0.1 * LaptopPurchasePrice;
          percentage = 10;
          LaptopRemainingMonths = 48 - LaptopMonthsInUse;
          LaptopPerMonthOff = LaptopPurchasePrice / 48;
        } else {
          LaptopResidualValue = 0;
          residualPercentage = 0.1 * LaptopPurchasePrice;
          percentage = 10;
          LaptopRemainingMonths = 0;
          LaptopPerMonthOff = LaptopPurchasePrice / 48;
        }
        break;
      case 'power':
        if (LaptopMonthsInUse < 48) {
          LaptopResidualValue = ((LaptopPurchasePrice * 0.85) / 48) * (48 - LaptopMonthsInUse));
          residualPercentage = 0.15 * LaptopPurchasePrice;
          percentage = 15;
          LaptopRemainingMonths = 48 - LaptopMonthsInUse;
          LaptopPerMonthOff = LaptopPurchasePrice / 48;
        } else {
          LaptopResidualValue = 0;
          residualPercentage = 0.15 * LaptopPurchasePrice;
          percentage = 15;
          LaptopRemainingMonths = 0;
          LaptopPerMonthOff = LaptopPurchasePrice / 48;
        }
        break;
      case 'macbook':
        if (LaptopMonthsInUse < 60) {
          LaptopResidualValue = ((LaptopPurchasePrice * 0.80) / 60) * (60 - LaptopMonthsInUse));
          residualPercentage = 0.2 * LaptopPurchasePrice;
          percentage = 20;
          LaptopRemainingMonths = 60 - LaptopMonthsInUse;
          LaptopPerMonthOff = LaptopPurchasePrice / 60;
        } else {
          LaptopResidualValue = 0;
          residualPercentage = 0.2 * LaptopPurchasePrice;
          percentage = 20;
          LaptopRemainingMonths = 0;
          LaptopPerMonthOff = LaptopPurchasePrice / 60;
        }
        break;
    }
  
    const LaptopRemainingDebt = LaptopResidualValue + residualPercentage;
  
    const LaptopResultElement = document.getElementById('LaptopResult');
    //resultElement.innerHTML = `Purchased for ${LaptopPurchasePrice} euros, after ${monthsInUse} months of use, this laptop is ${remainingDebt.toFixed(2)} euros in total (${residualValue.toFixed(2)} euros remaining amount + ${(LaptopPurchasePrice - residualValue).toFixed(2)} euros 10% value).`;
    LaptopResultElement.innerHTML = `
    Restwaarde Laptop is: <b>${LaptopRemainingDebt.toFixed(2)}</b> euro
    <br>(${LaptopResidualValue.toFixed(2)} restant afschrijving + ${residualPercentage.toFixed(2)} euro ${percentage}% van de aanschaf)
    <br><br> Aankoopprijs: ${LaptopPurchasePrice} euro
    <br> Gebruikt totaal: ${LaptopMonthsInUse} maanden
    <br> Resterende maanden: ${LaptopRemainingMonths} maanden
    <br> Afgerekend per maand: ${LaptopPerMonthOff} euro`;
    
  }


  function calculatePhoneRemainingDebt(){
    const PhoneBudget = parseFloat(document.getElementById('PhoneBudget').value);
    const PhonePurchaseDate = new Date(document.getElementById('PhonePurchaseDate').value);
    const PhoneTerminationDate = new Date(document.getElementById('PhoneTerminationDate').value);

    const PhoneMonthsInUse = Math.floor((PhoneTerminationDate - PhonePurchaseDate) / (30 * 24 * 60 * 60 * 1000));
    let PhoneRemainingMonths = 36 - PhoneMonthsInUse;
    const PhonePerMonthOff = PhoneBudget / 36;


    let PhoneResidualValue = 0;

    if (PhoneMonthsInUse < 36) {
      PhoneResidualValue = (PhoneBudget - ((PhoneBudget / 36) * PhoneMonthsInUse));
    } else {
      PhoneResidualValue = 0;
      PhoneRemainingMonths = 0;
    }

    const PhoneResultElement = document.getElementById('PhoneResult');
    PhoneResultElement.innerHTML = `
    Restwaarde Telefoon Voucher: <b>${PhoneResidualValue.toFixed(2)}</b> euro
    <br>Aankoopprijs: ${PhoneBudget} euro 
    <br>Gebruikt totaal: ${PhoneMonthsInUse} maanden
    <br>Resterende maanden: ${PhoneRemainingMonths} maanden
    <br>Afgerekend per maand: ${PhonePerMonthOff.toFixed(2)} euro`;

  }


  function calculateCoolblueRemainingDebt(){
    const CoolblueBudget = parseFloat(document.getElementById('CoolblueBudget').value);
    const CoolbluePurchaseDate = new Date(document.getElementById('CoolbluePurchaseDate').value);
    const CoolblueTerminationDate = new Date(document.getElementById('CoolblueTerminationDate').value);

    const CoolblueMonthsInUse = Math.floor((CoolblueTerminationDate - CoolbluePurchaseDate) / (30 * 24 * 60 * 60 * 1000));
    let CoolblueRemainingMonths = 36 - CoolblueMonthsInUse;
    const CoolbluePerMonthOff = CoolblueBudget / 36;


    let CoolblueResidualValue = 0;

    if (CoolblueMonthsInUse < 36) {
      CoolblueResidualValue = (CoolblueBudget - ((CoolblueBudget / 36) * CoolblueMonthsInUse));
    } else {
      CoolblueResidualValue = 0;
      CoolblueRemainingMonths = 0;
    }

    const CoolblueResultElement = document.getElementById('CoolblueResult');
    CoolblueResultElement.innerHTML = `
    Restwaarde Coolblue: <b>${CoolblueResidualValue.toFixed(2)}</b> euro 
    <br>Aankoopprijs: ${CoolblueBudget} euro 
    <br>Gebruikt totaal: ${CoolblueMonthsInUse} maanden
    <br>Resterende maanden: ${CoolblueRemainingMonths} maanden
    <br>Afgerekend per maand: ${CoolbluePerMonthOff.toFixed(2)} euro`;

  }
