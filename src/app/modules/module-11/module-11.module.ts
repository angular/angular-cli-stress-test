/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module11RoutingModule } from './module-11-routing.module';
import { Module11CompComponent } from './components/module-11-comp/module-11-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module11RoutingModule
  ],
  declarations: [Module11CompComponent]
})
export class Module11Module { }
