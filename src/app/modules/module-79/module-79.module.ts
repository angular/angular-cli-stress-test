/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module79RoutingModule } from './module-79-routing.module';
import { Module79CompComponent } from './components/module-79-comp/module-79-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module79RoutingModule
  ],
  declarations: [Module79CompComponent]
})
export class Module79Module { }
