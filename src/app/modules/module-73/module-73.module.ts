/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module73RoutingModule } from './module-73-routing.module';
import { Module73CompComponent } from './components/module-73-comp/module-73-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module73RoutingModule
  ],
  declarations: [Module73CompComponent]
})
export class Module73Module { }
