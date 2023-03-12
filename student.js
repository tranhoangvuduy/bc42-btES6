let studentsList = new ListPerson([]);
function createStudents() {
    let id = getElement('#idSP').value;
    let name = getElement('#nameSP').value;
    let address = getElement('#addressSP').value;
    let email = getElement('#emailSP').value;
    let toan = +getElement('#toanSP').value;
    let ly = +getElement('#lySP').value;
    let hoa = +getElement('#hoaSP').value;
    
    const student = new Student(id, name, address, email, toan, ly, hoa);
    studentsList.array.push(student);
   
    renderTable(studentsList.array);
    resetForm();
}
// Hàm xóa nhân viên theo tài khoản
function deleteStudents(studentId){
   
    studentsList.array = studentsList.array.filter((student) => {
        return student.id !== studentId;
    });
    renderTable(studentsList.array);
}


// const student = new Student();
// studentsList.push(student);
// renderTable(studentsList);
// console.log(studentsList);

function renderTable(studentsList) {
    let html = "";
    for (let i = 0; i < studentsList.length; i++) {
        let student = studentsList[i];
        html += `
        <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.address}</td>
        <td>${student.email}</td>
        <td>${student.toan}</td>
        <td>${student.ly}</td>
        <td>${student.hoa}</td>
        <td>${student.sumScore()}</td>
        <td> 
           <button data-toggle="modal" data-target="#myModal" class="btn btn-primary" onclick="selectStudents('${student.id}')">Chỉnh sửa</button>
           <button class="btn btn-danger" onclick="deleteStudents('${student.id}')">Xóa</button>
        </td>
        
        
        </tr>
        
        `;
    }
    getElement("#tableDanhSach").innerHTML = html;
    // console.log(html);
}
// HÀM RESET NHÂN VIÊN
function resetForm() {
    getElement("#idSP").value = "";
    getElement("#nameSP").value = "";
    getElement("#addressSP").value = "";
    getElement("#emailSP").value = "";
    getElement("#toanSP").value = "";
    getElement("#lySP").value = "";
    getElement("#hoaSP").value = "";
   
    getElement("#btnAdd").disabled = false;
    getElement("#idSP").disabled = false;
}

function selectStudents(studentId){
    let selectedStudents = studentsList.array.find((student) => {
        return student.id === studentId;
    });
    // B2: lấy thông tin
    getElement("#idSP").value = selectedStudents.id; 
    getElement("#nameSP").value = selectedStudents.name;
    getElement("#addressSP").value = selectedStudents.address;
    getElement("#emailSP").value = selectedStudents.email;
    getElement("#toanSP").value = selectedStudents.toan;
    getElement("#lySP").value = selectedStudents.ly;
    getElement("#hoaSP").value = selectedStudents.hoa;
    
    // ********
    getElement("#btnAdd").disabled = true;
    getElement("#idSP").disabled = true;
}


// HÀM CẬP NHẬT THÔNG TIN HỌC VIÊN
function updateStudents(){
    let id = getElement("#idSP").value;
    let name = getElement("#nameSP").value;
    let address = getElement("#addressSP").value;
    let email = getElement("#emailSP").value;
    let toan = +getElement("#toanSP").value;
    let ly = +getElement("#lySP").value;
    let hoa = +getElement("#hoaSP").value;
    //    B2: khởi tạo object
    const student = new Student(id, name, address, email, toan, ly, hoa);
    // B3: cập nhật thông tin mới của học viên
    let index = studentsList.array.findIndex((student) => {
        return student.id === student;
    });
    studentsList.array[index] = student;
    // B4: gọi hàm renderTable
    renderTable(studentsList.array);
    // B5: reset form
    resetForm();
    console.log(studentsList.array);
    
}

function getElement(selector) {
    return document.querySelector(selector);
}
