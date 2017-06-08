/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module9RoutingModule } from './module-9-routing.module';
import { Module9CompComponent } from './components/module-9-comp/module-9-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module9RoutingModule
  ],
  declarations: [Module9CompComponent]
})
export class Module9Module { }
