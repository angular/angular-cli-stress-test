/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module90RoutingModule } from './module-90-routing.module';
import { Module90CompComponent } from './components/module-90-comp/module-90-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module90RoutingModule
  ],
  declarations: [Module90CompComponent]
})
export class Module90Module { }
