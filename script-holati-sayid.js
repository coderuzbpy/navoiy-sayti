document.getElementById("submitBtn").addEventListener("click", function () {
    let score = 0;

    // To'g'ri javoblar
    const correctAnswers = {
        q1: "A",
        q2: "B",
        q3: "C",
        q4: "D",
        q5: "C",
        q6: "A",
        q7: "A",
        q8: "B",
        q9: "A",
        q10: "B",
        q11: "D",
        q12: "A",
        q13: "C",
        q14: "A",
        q15: "D",
        q16: "A",
        q17: "D",
        q18: "A",
        q19: "C",
        q20: "A",
        q21: "A",
        q22: "B",
        q23: "D",
        q24: "B",
        q25: "B",
        q26: "A",
        q27: "B",
        q28: "C",
        q29: "B",
        q30: "D"
    };

    // Foydalanuvchi javoblari
    const form = document.getElementById("ardasherTest");
    const userAnswers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q4.value,
        q5: form.q5.value,
        q6: form.q6.value,
        q7: form.q7.value,
        q8: form.q8.value,
        q9: form.q9.value,
        q10: form.q10.value,
        q11: form.q11.value,
        q12: form.q12.value,
        q13: form.q13.value,
        q14: form.q14.value,
        q15: form.q15.value,
        q16: form.q16.value,
        q17: form.q17.value,
        q18: form.q18.value,
        q19: form.q19.value,
        q20: form.q20.value,
        q21: form.q21.value,
        q22: form.q22.value,
        q23: form.q23.value,
        q24: form.q24.value,
        q25: form.q25.value,
        q26: form.q26.value,
        q27: form.q27.value,
        q28: form.q28.value,
        q29: form.q29.value,
        q30: form.q30.value
    };

    // Javoblarni tekshirish
    for (let key in correctAnswers) {
        if (userAnswers[key] === correctAnswers[key]) {
            score++;
        }
    }

    // Natijani chiqarish
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Sizning natijangiz: ${score} / 30</p>`;

    if (score === 30) {
        resultDiv.innerHTML += "<p>Ajoyib! Barcha javoblar to'g'ri!</p>";
    } else {
        resultDiv.innerHTML += "<p>Yana bir bor urinib ko'ring!</p>";
    }
});

document.getElementById("resetBtn").addEventListener("click", function () {
    // Clear all radio buttons
    const form = document.getElementById("ardasherTest");
    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
    });

    // Clear result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
});
