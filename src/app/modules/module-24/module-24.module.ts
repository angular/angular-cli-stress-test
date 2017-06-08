/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module24RoutingModule } from './module-24-routing.module';
import { Module24CompComponent } from './components/module-24-comp/module-24-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module24RoutingModule
  ],
  declarations: [Module24CompComponent]
})
export class Module24Module { }
