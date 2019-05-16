import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-quanly-sp',
  templateUrl: './quanly-sp.component.html',
  styleUrls: ['./quanly-sp.component.scss']
})
export class QuanlySpComponent implements OnInit {
  @ViewChild('maSP') formMaSP: ElementRef;
  @ViewChild('tenSP') formTenSP: ElementRef;
  @ViewChild('giaSP') formGiaSP: ElementRef;
  array: Array<DoiTuong> = [];
  // tslint:disable-next-line:no-inferrable-types
  tenSanPham: string = '';
  // tslint:disable-next-line:no-inferrable-types
  maSanPham: string = '';
  // tslint:disable-next-line:no-inferrable-types
  giaSanPham: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  bgColor: string = '#d6d8db';

  constructor( ) {
}

  ngOnInit() {
    // Kiểm tra LocalStorage tồn tại
    if (localStorage.getItem('MangSanPham') !== null) {
      const mangDoiTuong = JSON.parse(localStorage.getItem('MangSanPham'));
     // tslint:disable-next-line:align
     this.array = mangDoiTuong;
   }
  }

  // Function: Reset Value Input
  resetForm = () => {
    this.formMaSP.nativeElement.value = '';
    this.formTenSP.nativeElement.value = '';
    this.formGiaSP.nativeElement.value = '';
  }

  // Function: Thêm mới 1 sản phẩm
  themSP = (masp, tensp, giasp) => {
  this.tenSanPham = tensp;
  this.maSanPham = masp;
  this.giaSanPham = giasp;

  // tslint:disable-next-line:no-inferrable-types
  let isExist: boolean = false;
  const obj =  new DoiTuong( this.maSanPham, this.tenSanPham, this.giaSanPham);

  // Kiểm tra xem sản phẩm nhập vào đã tồn tại trong ds chưa
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < this.array.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (obj.maSP.toLowerCase() === this.array[i].maSP.toLowerCase()) {
        alert('Sản phẩm đã tồn tại') ;
        isExist = true;
        break;
      }
   }
   // tslint:disable-next-line:align
   // Thêm sản phẩm nếu sản phẩm chưa tồn tại trong ds
  if (isExist === false) {
     this.array.push(obj);
     localStorage.setItem('MangSanPham', JSON.stringify(this.array));
     this.resetForm();
   }
  }
}

export class DoiTuong {
 maSP: string ;
 tenSP: string ;
 giaSP: number;

 constructor(masp, tensp, giasp) {
   this.maSP = masp;
   this.tenSP = tensp;
   this.giaSP = giasp;
 }
}
