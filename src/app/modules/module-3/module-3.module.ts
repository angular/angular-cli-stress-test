/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module-3-routing.module';
import { Module3CompComponent } from './components/module-3-comp/module-3-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module3RoutingModule
  ],
  declarations: [Module3CompComponent]
})
export class Module3Module { }
