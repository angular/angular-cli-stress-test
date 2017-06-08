/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module98RoutingModule } from './module-98-routing.module';
import { Module98CompComponent } from './components/module-98-comp/module-98-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module98RoutingModule
  ],
  declarations: [Module98CompComponent]
})
export class Module98Module { }
