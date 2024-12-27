function calculateAge() {
    // Get birthdate input
    const birthdateInput = document.getElementById('birthdate');
    const resultDiv = document.getElementById('result');
    
    // Validate input
    if (!birthdateInput.value) {
        resultDiv.textContent = 'Please select a birthdate.';
        return;
    }
    
    // Create Date objects
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    
    // Calculate age
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();
    
    // Adjust age if birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    // Calculate precise months and days
    let months = monthDiff < 0 ? 12 + monthDiff : monthDiff;
    let days = dayDiff < 0 ? 
        new Date(today.getFullYear(), today.getMonth(), 0).getDate() + dayDiff 
        : dayDiff;
    
    if (dayDiff < 0) {
        months--;
    }
    
    // Display results
    resultDiv.innerHTML = `
        <p>Your Age: ${age} years</p>
        <p>Precise Age: ${age} years, ${months} months, and ${days} days</p>
        <p>Total Days Lived: ${Math.floor((today - birthdate) / (1000 * 60 * 60 * 24))} days</p>
    `;
}
