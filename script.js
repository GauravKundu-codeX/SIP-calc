document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get input values
    const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
    const annualReturn = parseFloat(document.getElementById('annual-return').value);
    const duration = parseInt(document.getElementById('duration').value);
    
    // Validate inputs
    if (isNaN(monthlyInvestment) || monthlyInvestment <= 0 ||
        isNaN(annualReturn) || annualReturn < 0 ||
        isNaN(duration) || duration <= 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }
    
    // Calculate
    const monthlyRate = annualReturn / 100 / 12;
    const numMonths = duration * 12;
    
    // Total Invested Amount
    const totalInvested = monthlyInvestment * numMonths;
    
    // Maturity Value using SIP formula: FV = P * [(1 + r)^n - 1] / r
    const maturityValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, numMonths) - 1) / monthlyRate);
    
    // Estimated Returns
    const estimatedReturns = maturityValue - totalInvested;
    
    // Display results
    document.getElementById('total-invested').textContent = totalInvested.toFixed(2);
    document.getElementById('estimated-returns').textContent = estimatedReturns.toFixed(2);
    document.getElementById('maturity-value').textContent = maturityValue.toFixed(2);
    
    // Show results section
    document.getElementById('results').classList.remove('hidden');
});