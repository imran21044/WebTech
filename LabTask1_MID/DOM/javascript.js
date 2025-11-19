// 1. Event Listener for Form Submission
document.getElementById('student-form').addEventListener('submit', addStudent);

// 2. addStudent Function
function addStudent(event) {
    event.preventDefault();

    // 3. Get Student Name
    let studentName = document.getElementById('student-name').value;

    if (studentName === '') {
        alert('Please enter a student name');
        return;
    }

    // 4. Create New List Item
    let li = document.createElement('li');
    li.classList.add('student-item');

    // 5. Create a Span to Display Student Name
    let span = document.createElement('span');
    span.textContent = studentName;

    // 6. Create Edit Button
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('btn-edit');
    editButton.addEventListener('click', function () {
        editStudent(li, span);
    });

    // Create Delete Button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn-delete');
    deleteButton.addEventListener('click', function () {
        deleteStudent(li);
    });

    // Append buttons and span to li
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // 7. Append li to student list
    document.getElementById('student-list').appendChild(li);

    // Reset input
    document.getElementById('student-name').value = '';
}

// 8. Delete Student
function deleteStudent(studentElement) {
    studentElement.remove();
}

// 9. Edit Student Name
function editStudent(studentElement, studentNameElement) {
    let newName = prompt('Enter the new name:', studentNameElement.textContent);
    if (newName !== null && newName !== '') {
        studentNameElement.textContent = newName;
    }
}

// 10. Change List Style (Highlight)
function changeListStyle() {
    let students = document.querySelectorAll('.student-item');
    students.forEach(student => {
        student.classList.toggle('highlight');
    });
}

// 11. Add Highlight Button Dynamically
let changeStyleButton = document.createElement('button');
changeStyleButton.textContent = 'Highlight Students';
changeStyleButton.addEventListener('click', changeListStyle);
document.body.appendChild(changeStyleButton);
