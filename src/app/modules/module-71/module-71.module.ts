/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module71RoutingModule } from './module-71-routing.module';
import { Module71CompComponent } from './components/module-71-comp/module-71-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module71RoutingModule
  ],
  declarations: [Module71CompComponent]
})
export class Module71Module { }
