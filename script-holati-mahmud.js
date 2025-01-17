document.getElementById("submitBtn").addEventListener("click", function () {
    let score = 0;

    // To'g'ri javoblar
    const correctAnswers = {
q1: "C",
q2: "B",
q3: "B",
q4: "D",
q5: "C",
q6: "D",
q7: "D",
q8: "C",
q9: "A",
q10: "B",
q11: "C",
q12: "A",
q13: "C",
q14: "D",
q15: "B",
q16: "B",
q17: "C",
q18: "A",
q19: "C",
q20: "D",
q21: "A",
q22: "B",
q23: "C",
q24: "C",
q25: "C",
q26: "D",
q27: "A",
q28: "C",
q29: "D",
q30: "B",
q31: "C",
q32: "D",
q33: "A",
q34: "B",
q35: "C",
q36: "A",
q37: "C",
q38: "A",
q39: "C",
q40: "C"

    };

    // Foydalanuvchi javoblari
    const form = document.getElementById("mahmudTest");
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
        q30: form.q30.value,
        q31: form.q31.value,
        q32: form.q32.value,
        q33: form.q33.value,
        q34: form.q34.value,
        q35: form.q35.value,
        q36: form.q36.value,
        q37: form.q37.value,
        q38: form.q38.value,
        q39: form.q39.value,
        q40: form.q40.value
    };

    // Javoblarni tekshirish
    for (let key in correctAnswers) {
        if (userAnswers[key] === correctAnswers[key]) {
            score++;
        }
    }

    // Natijani chiqarish
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Sizning natijangiz: ${score} / 40</p>`;

    if (score === 40) {
        resultDiv.innerHTML += "<p>Ajoyib! Barcha javoblar to'g'ri!</p>";
    } else {
        resultDiv.innerHTML += "<p>Yana bir bor urinib ko'ring!</p>";
    }
});

document.getElementById("resetBtn").addEventListener("click", function () {
    // Clear all radio buttons
    const form = document.getElementById("mahmudTest");
    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
    });

    // Clear result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
});
