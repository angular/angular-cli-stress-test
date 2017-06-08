/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module48RoutingModule } from './module-48-routing.module';
import { Module48CompComponent } from './components/module-48-comp/module-48-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module48RoutingModule
  ],
  declarations: [Module48CompComponent]
})
export class Module48Module { }
