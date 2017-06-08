/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module33RoutingModule } from './module-33-routing.module';
import { Module33CompComponent } from './components/module-33-comp/module-33-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module33RoutingModule
  ],
  declarations: [Module33CompComponent]
})
export class Module33Module { }
