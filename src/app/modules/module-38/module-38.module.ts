/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module38RoutingModule } from './module-38-routing.module';
import { Module38CompComponent } from './components/module-38-comp/module-38-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module38RoutingModule
  ],
  declarations: [Module38CompComponent]
})
export class Module38Module { }
