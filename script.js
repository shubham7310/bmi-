document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const ageInput = document.getElementById("age");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");
    const dietLinkDiv = document.getElementById("diet-link"); // Add the link div

    calculateButton.addEventListener("click", function () {
        const height = parseFloat(heightInput.value) / 100;
        const weight = parseFloat(weightInput.value);
        const age = parseInt(ageInput.value);

        if (isNaN(height) || isNaN(weight) || isNaN(age)) {
            resultDiv.innerHTML = "Please enter valid height, weight, and age.";
        } else {
            const bmi = weight / (height * height);
            resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
            let dietPlan = "";
            if (age >= 18 && age <= 25 && bmi <= 18.5) {
                dietPlan = "You are Under-Weight an Indian adult between the age of 18-25 requires careful attention to nutrient density and caloric intake. The goal is to provide enough calories, protein, healthy fats, vitamins, and minerals to support healthy weight gain Remember that weight gain should be gradual and healthy. It's essential to combine this diet plan with regular physical activity for overall well-being. Also, consult with a healthcare professional to ensure that your weight gain plan is appropriate for your specific needs and health status. ";
            } 
            else if (age >= 18 && age <= 25 && bmi >= 25) {
                dietPlan = "If you're an Overweight Indian adult between the ages of 18 to 25, it's essential to focus on a balanced and nutritious vegetarian diet that supports weight management and overall health.Remember, sustainable weight management is a gradual process, and it's important to focus on a healthy lifestyle rather than quick fixes or extreme diets. Make these dietary changes part of a long-term plan for better health and well-being.";
            } 
            else if (age >= 18 && age <= 25 && bmi >= 18.5 && bmi <= 24.9) {
                dietPlan = "You are in Normal Weight";
            } 


            else if (age >= 26 && age <= 35 && bmi <= 18.5) {
                dietPlan = "You are Under-Weight an Indian adult between the ages of 26-35 also requires attention to nutrient density, caloric intake, and a balance of essential nutrients.Remember, weight gain should be gradual and healthy. Combine this diet plan with regular physical activity and consult with a healthcare professional to ensure it's suitable for your individual needs and health status.";
            }
            else if (age >= 26 && age <= 35 && bmi >= 25) {
                dietPlan = "If you're an Overweight an Indian adult between the ages of 25-35, it's essential to focus on a balanced and calorie-controlled vegetarian diet to support weight loss and overall health.Remember that sustainable weight loss is a gradual process, and it's important tofocus on creating a healthy lifestyle that you can maintain in the long term. Make these dietary changes part of your overall plan for better health and well-being.";
            }
            else if (age >= 26 && age <= 35 && bmi >= 18.5 && bmi <= 24.9) {
                dietPlan = "You are in Normal Weight";
            }


            else if (age >= 36 && age <= 45 && bmi <= 18.5) {
                dietPlan = "You are Under-Weight an Indian adult between the ages of 35-45. This diet aims to provide adequate calories, protein, and essential nutrients for healthy weight gain.Remember that healthy weight gain should be gradual and achieved through a balanced diet and lifestyle. Also, consult with a healthcare professional to ensure that your weight gain plan is appropriate for your specific needs and health status.";
            }
            else if (age >= 36 && age <= 45 && bmi >= 25) {
                dietPlan = "If you're an Overweight Indian adult between the ages of 35-45 should focus on achieving a calorie deficit for weight loss while providing essential nutrients for overall health.Remember that weight loss is a gradual process, and it's important to create a sustainable and balanced eating plan. Aim for long-term changes in your diet and lifestyle to achieve and maintain a healthy weight.";
            }
            else if (age >= 36 && age <= 45 && bmi >= 18.5 && bmi <= 24.9) {
                dietPlan = "You are in Normal Weight";
            }


            else if (age > 46 && bmi <= 18.5) {
                dietPlan = " You are Under-Weight an Indian adults aged 45 and older should prioritize nutrient density, adequate protein intake, and overall health. Weight gain should be gradual and should prioritize overall health. Regular physiactivity and a balanced diet are essential. Additionally, consult with a healthcprofessional to ensure that your weight gain plan aligns with your specific needs health status, especially if you have any underlying medical conditions or concerns.";
            }
            else if (age >= 46 && bmi >= 25) {
                dietPlan = "If you're an Overweight Indian adult aged 45 and older should prioritize weight management and overall health.Remember that weight management is a gradual process, and it's essential to make sustainable changes in your diet and lifestyle. Aim for long-term improvements in your eating habits and overall health ";
            }
            else if (age >= 46 && bmi >= 18.5 && bmi <= 24.9) {
                dietPlan = "You are in Normal Weight";
            }
           
            dietLinkDiv.innerHTML = `
                        <p>${dietPlan} For more personalized dietary recommendations download the diet plan.</p>
                    `;


        }
    });
});
