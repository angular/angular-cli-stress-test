/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module-2-routing.module';
import { Module2CompComponent } from './components/module-2-comp/module-2-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
  declarations: [Module2CompComponent]
})
export class Module2Module { }
