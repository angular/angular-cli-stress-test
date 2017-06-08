/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module25RoutingModule } from './module-25-routing.module';
import { Module25CompComponent } from './components/module-25-comp/module-25-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module25RoutingModule
  ],
  declarations: [Module25CompComponent]
})
export class Module25Module { }
