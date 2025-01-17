document.getElementById("submitBtn").addEventListener("click", function () {
    let score = 0;

    // To'g'ri javoblar
    const correctAnswers = {
        q1: "C",
        q2: "A",
        q3: "D",
        q4: "A",
        q5: "B",
        q6: "A",
        q7: "D",
        q8: "C",
        q9: "A",
        q10: "A",
        q11: "B",
        q12: "B",
        q13: "B",
        q14: "A",
        q15: "B",
        q16: "C",
        q17: "C",
        q18: "B",
        q19: "A",
        q20: "D",
        q21: "A",
        q22: "C",
        q23: "A",
        q24: "C",
        q25: "A",
        q26: "B",
        q27: "A",
        q28: "B",
        q29: "A",
        q30: "C"
    };

    // Foydalanuvchi javoblari
    const form = document.getElementById("munojotTest");
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
    const form = document.getElementById("munojotTest");
    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
    });

    // Clear result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
});



