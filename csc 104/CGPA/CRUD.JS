let courses = [];

function addCourse() {
    const courseName = document.getElementById('courseName').value;
    const creditUnit = parseFloat(document.getElementById('creditUnit').value);
    const grade = document.getElementById('grade').value;

    if (courseName && creditUnit && grade) {
        courses.push({ name: courseName, credit: creditUnit, grade: grade });
        displayCourses();
        clearInputs();
    } else {
        alert('Please fill in all fields.');
    }
}

function displayCourses() {
    const coursesList = document.getElementById('courses');
    coursesList.innerHTML = '';

    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        coursesList.innerHTML += `
            <p>${course.name} ( ${course.credit} Credits, ${course.grade} )</p>
        `;
    }
}

function clearInputs() {
    document.getElementById('courseName').value = '';
    document.getElementById('creditUnit').value = '';
    document.getElementById('grade').value = '';
}

function calculateCGPA() {
    let totalQualityPoints = 0;
    let totalCreditUnits = 0;

    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        let qualityPoints = 0;

        switch (course.grade) {
            case 'A':
                qualityPoints = 4 * course.credit;
                break;
            case 'B':
                qualityPoints = 3 * course.credit;
                break;
            case 'C':
                qualityPoints = 2 * course.credit;
                break;
            case 'D':
                qualityPoints = 1 * course.credit;
                break;
        }

        totalQualityPoints += qualityPoints;
        totalCreditUnits += course.credit;
    }

    if (totalCreditUnits > 0) {
        const cgpa = totalQualityPoints / totalCreditUnits;
        document.getElementById('cgpa').textContent = `CGPA: ${cgpa.toFixed(2)}