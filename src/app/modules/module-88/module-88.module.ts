/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module88RoutingModule } from './module-88-routing.module';
import { Module88CompComponent } from './components/module-88-comp/module-88-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module88RoutingModule
  ],
  declarations: [Module88CompComponent]
})
export class Module88Module { }
