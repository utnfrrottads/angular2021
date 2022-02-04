import { Routes } from '@angular/router';
import { DetailProveedorComponent } from './detail-proveedores.component';
import { UpdateProveedorComponent } from './update-proveedores.component';
import { ProveedorComponent } from './proveedores.component';
import { PagingParamsResolve } from '../util/paging-params-resolve';
import {AuthGuards} from "../security/auth-guards";

export const productoRoutes: Routes = [
  {
    path: '',
    component: ProveedorComponent,
    resolve: {
      pagingParams: PagingParamsResolve
  },
    data: {
      title: 'Proveedores',
      permissions: ['administrador','compras','supervisor']
    },
    canActivate: [AuthGuards]
  },
  {
    path: 'new',
    component: UpdateProveedorComponent,
    data: {
      title: 'Crear Proveedor',
      permissions: ['administrador','compras','supervisor']
    },
    canActivate: [AuthGuards]
  },
  {
    path: ':id/edit',
    component: UpdateProveedorComponent,
    data: {
      title: 'Actualizar Proveedor',
      permissions: ['administrador','compras','supervisor']
    },
    canActivate: [AuthGuards]
  },
  {
    path: ':id/view',
    component: DetailProveedorComponent,
    data: {
      title: 'Detalle de Proveedor',
      permissions: ['administrador','compras','supervisor']
    },
    canActivate: [AuthGuards]
  }
];
