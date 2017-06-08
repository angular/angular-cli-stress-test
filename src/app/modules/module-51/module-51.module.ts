/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module51RoutingModule } from './module-51-routing.module';
import { Module51CompComponent } from './components/module-51-comp/module-51-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module51RoutingModule
  ],
  declarations: [Module51CompComponent]
})
export class Module51Module { }
