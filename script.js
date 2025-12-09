function calculateCalories() {
    // 1. Get user inputs
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activity = document.getElementById('activity').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // 2. Simple Validation
    if (!age || !weight || !height) {
        // Show error message
        document.getElementById('error-msg').classList.remove('hidden');
        document.getElementById('results').classList.add('hidden');
        return;
    }
    
    // Hide error message if validation passes
    document.getElementById('error-msg').classList.add('hidden');

    // 3. Calculate BMR (Mifflin-St Jeor Equation)
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // 4. Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activity;

    // 5. Update UI with rounded values
    document.getElementById('bmr-val').innerText = Math.round(bmr);
    document.getElementById('tdee-val').innerText = Math.round(tdee);
    
    // Lose Weight: 500 calorie deficit
    document.getElementById('loss-val').innerText = Math.round(tdee - 500);
    
    // Gain Weight: 500 calorie surplus
    document.getElementById('gain-val').innerText = Math.round(tdee + 500);

    // 6. Reveal the results section
    document.getElementById('results').classList.remove('hidden');
    
    // Optional: smooth scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}