function listChanged(obj) {
  let changed = document.getElementById('tagShow');
  let value = obj.value;
  if (value === "") {
    alert("Hãy chọn người dùng");
  } else if (value === 'HV') {
    changed.innerHTML = `
       
        <thead>
        <tr><th>id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Toán</th>                
        <th>Lý</th>
        <th>Hóa</th>
        <th>Điểm TB</th>
        <th>*</th>
      </tr></thead>
      <tbody id="tableDanhSach"></tbody>
        `
    document.getElementById('myContent').innerHTML = `
        <div class="modal-header">
              <h4 class="modal-title">
              Thêm học viên</h4>
              <button type="button" class="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                
                <input type="number" id="idSP" class="form-control" placeholder="ID">
              </div>
              <span class="sp-thongbao" id="tbname"></span>
              <div class="form-group">
                
                <input type="" id="nameSP" class="form-control" placeholder="Name">
              </div>
              <span class="sp-thongbao" id="tbprice"></span>             
              <div class="form-group">
                
                <input id="addressSP" class="form-control" placeholder="Address">
              </div>
              <span class="sp-thongbao" id="tbscreen"></span>
              <div class="form-group">
                
                <input id="emailSP" class="form-control" placeholder="Email">
              </div>
              <span class="sp-thongbao" id="tbback"></span>
              <div class="form-group">
               
                <input type="number" id="toanSP" class="form-control" placeholder="Điểm Toán">
              </div>
              <span class="sp-thongbao" id="tbfront"></span>
              <div class="form-group">
                
                <input type="number" id="lySP" class="form-control" placeholder="Điểm Lý">
              </div>
              <span class="sp-thongbao" id="tbimg"></span>
              <div class="form-group">
               
                <input type="number" id="hoaSP" class="form-control" placeholder="Điểm Hóa">
              </div>
              <span class="sp-thongbao" id="tbdes"></span>
              
             
              
            </div>
            <div class="modal-footer">
            <button id="btnAdd" onclick="createStudents()" type="button" class="btn btn-success">Add</button>
            <button id="btnUpDate" onclick="updateStudents()" type="button" class="btn btn-success" >Update</button>
            <button id="btnReset" onclick="resetForm()" type="button" class="btn btn-success">Reset</button>
            </div>
            
            
        `
        

  } else if (value === 'NV') {
    changed.innerHTML = `
        <thead>
        <tr><th>id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Số ngày làm</th>                
        <th>Lương 1 ngày</th>
        <th>Tiền lương</th>
        <th>*</th>
        
      </tr></thead>
        `
    document.getElementById('myContent').innerHTML = `
        <div class="modal-header">
              <h4 class="modal-title">
              Thêm nhân viên</h4>
              <button type="button" class="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                
                <input id="TenSP" class="form-control" placeholder="ID">
              </div>
              <span class="sp-thongbao" id="tbname"></span>
              <div class="form-group">
                
                <input type="number" id="GiaSP" class="form-control" placeholder="Name">
              </div>
              <span class="sp-thongbao" id="tbprice"></span>             
              <div class="form-group">
                
                <input id="ManHinhSP" class="form-control" placeholder="Address">
              </div>
              <span class="sp-thongbao" id="tbscreen"></span>
              <div class="form-group">
                
                <input id="BackSP" class="form-control" placeholder="Email">
              </div>
              <span class="sp-thongbao" id="tbback"></span>
              <div class="form-group">
               
                <input id="FrontSP" class="form-control" placeholder="Số ngày làm">
              </div>
              <span class="sp-thongbao" id="tbfront"></span>
              <div class="form-group">
                
                <input id="ImgSP" class="form-control" placeholder="Lương 1 ngày">
              </div>
              <span class="sp-thongbao" id="tbimg"></span>
             
              
             
              
            </div>
            <div class="modal-footer">
            <button id="btnAddPhone" type="button" class="btn btn-success">Add</button>
            <button id="btnUpDatePhone" type="button" class="btn btn-success">Update</button>
            </div>
            
        `
  } else if (value === 'KH') {
    changed.innerHTML = `
        <thead>
        <tr><th>id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Tên công ty</th>                
        <th>Giá trị hóa đơn</th>
        <th>Đánh giá</th>
        <th>*</th>
        
      </tr></thead>
        `
        document.getElementById('myContent').innerHTML = `
        <div class="modal-header">
              <h4 class="modal-title">
              Thêm khách hàng</h4>
              <button type="button" class="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                
                <input id="TenSP" class="form-control" placeholder="ID">
              </div>
              <span class="sp-thongbao" id="tbname"></span>
              <div class="form-group">
                
                <input type="number" id="GiaSP" class="form-control" placeholder="Name">
              </div>
              <span class="sp-thongbao" id="tbprice"></span>             
              <div class="form-group">
                
                <input id="ManHinhSP" class="form-control" placeholder="Address">
              </div>
              <span class="sp-thongbao" id="tbscreen"></span>
              <div class="form-group">
                
                <input id="BackSP" class="form-control" placeholder="Email">
              </div>
              <span class="sp-thongbao" id="tbback"></span>
              <div class="form-group">
               
                <input id="FrontSP" class="form-control" placeholder="Tên công ty">
              </div>
              <span class="sp-thongbao" id="tbfront"></span>
              <div class="form-group">
                
                <input id="ImgSP" class="form-control" placeholder="Giá trị hóa đơn">
              </div>
              <span class="sp-thongbao" id="tbimg"></span>
              <div class="form-group">
               
                <input id="DesSP" class="form-control" placeholder="Đánh giá">
              </div>
              <span class="sp-thongbao" id="tbdes"></span>
              
             
              
            </div>
            <div class="modal-footer">
            <button id="btnAddPhone" type="button" class="btn btn-success">Add</button>
            <button id="btnUpDatePhone" type="button" class="btn btn-success">Update</button>
            </div>
            
        `
  }

}

