/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module15RoutingModule } from './module-15-routing.module';
import { Module15CompComponent } from './components/module-15-comp/module-15-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module15RoutingModule
  ],
  declarations: [Module15CompComponent]
})
export class Module15Module { }
