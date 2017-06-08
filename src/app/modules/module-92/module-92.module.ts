/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module92RoutingModule } from './module-92-routing.module';
import { Module92CompComponent } from './components/module-92-comp/module-92-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module92RoutingModule
  ],
  declarations: [Module92CompComponent]
})
export class Module92Module { }
