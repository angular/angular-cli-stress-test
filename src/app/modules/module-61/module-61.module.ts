/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module61RoutingModule } from './module-61-routing.module';
import { Module61CompComponent } from './components/module-61-comp/module-61-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module61RoutingModule
  ],
  declarations: [Module61CompComponent]
})
export class Module61Module { }
