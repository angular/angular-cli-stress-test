/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module74RoutingModule } from './module-74-routing.module';
import { Module74CompComponent } from './components/module-74-comp/module-74-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module74RoutingModule
  ],
  declarations: [Module74CompComponent]
})
export class Module74Module { }
