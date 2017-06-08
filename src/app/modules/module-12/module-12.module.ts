/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module12RoutingModule } from './module-12-routing.module';
import { Module12CompComponent } from './components/module-12-comp/module-12-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module12RoutingModule
  ],
  declarations: [Module12CompComponent]
})
export class Module12Module { }
