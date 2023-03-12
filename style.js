class Person {
    constructor (id, name, address, email) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        
    }
}

class Student extends Person {
    constructor (id, name, address, email, toan, ly, hoa) {
        super (id, name, address, email);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
    }
    sumScore () {
        return (this.toan + this.ly + this.hoa) / 3;
    }
}
// const student = new Student ("01", "bảo", "207 lô A", "demo@gmail.com", 6, 7, 8 );
// console.log(student);
// const sumScore1 = student.sumScore();
// console.log("Diem TB:", sumScore1 );

class Employee extends Person {
    constructor (id, name, address, email, soNgay, luong) {
        super (id, name, address, email);
        this.soNgay = soNgay;
        this.luong = luong;
    }
    calcSalary () {
        return this.soNgay * this.luong;
    }
}
// const employee = new Employee ("01", "bảo", "207 lô A", "demo@gmail.com", 3, 2000 );
// console.log(employee);
// const calcSalary1 = employee.calcSalary();
// console.log("Lương 1 ngày:", calcSalary1 );

class Customer extends Person {
    constructor (id, name, address, email, tenCty, giaTriHoaDon, danhGia) {
        super (id, name, address, email);
        this.tenCty = tenCty;
        this.giaTriHoaDon = giaTriHoaDon;
        this.danhGia = danhGia;
    }
}
 class ListPerson {
    constructor(array){
        this.array = array;
    }
 }
 const list = new ListPerson([]);
//  console.log(list);