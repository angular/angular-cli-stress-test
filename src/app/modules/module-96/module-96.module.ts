/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module96RoutingModule } from './module-96-routing.module';
import { Module96CompComponent } from './components/module-96-comp/module-96-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module96RoutingModule
  ],
  declarations: [Module96CompComponent]
})
export class Module96Module { }
