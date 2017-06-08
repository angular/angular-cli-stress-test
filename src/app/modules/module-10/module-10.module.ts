/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module10RoutingModule } from './module-10-routing.module';
import { Module10CompComponent } from './components/module-10-comp/module-10-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module10RoutingModule
  ],
  declarations: [Module10CompComponent]
})
export class Module10Module { }
