/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module89RoutingModule } from './module-89-routing.module';
import { Module89CompComponent } from './components/module-89-comp/module-89-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module89RoutingModule
  ],
  declarations: [Module89CompComponent]
})
export class Module89Module { }
