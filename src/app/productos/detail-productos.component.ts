import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IProducto } from './productos.models';
import { ProductoService } from './productos.service';
import { DeleteProductoModalComponent } from './delete-productos-modal.component';

@Component({
  selector: 'app-detail-productos',
  templateUrl: './detail-productos.component.html'
})
export class DetailProductoComponent implements OnInit {
  private ngbModalRef: NgbModalRef | undefined;

  producto!: IProducto;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.productoService.find(parseInt(id)).subscribe(
        (res: HttpResponse<IProducto>) =>  this.producto = res.body!
      );
    }
  }

  delete(id: number): void {
    this.ngbModalRef = this.modalService.open(DeleteProductoModalComponent, { size: 'lg', backdrop: 'static' });
    this.ngbModalRef.componentInstance.id = id;
    this.ngbModalRef.result.then(
      () => {
        this.previousState();
      },
      () => {
        this.ngbModalRef = undefined;
      }
    );
  }

  previousState(): void {
    window.history.back();
  }
}
