/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module55RoutingModule } from './module-55-routing.module';
import { Module55CompComponent } from './components/module-55-comp/module-55-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module55RoutingModule
  ],
  declarations: [Module55CompComponent]
})
export class Module55Module { }
