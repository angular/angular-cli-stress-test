/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module44RoutingModule } from './module-44-routing.module';
import { Module44CompComponent } from './components/module-44-comp/module-44-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module44RoutingModule
  ],
  declarations: [Module44CompComponent]
})
export class Module44Module { }
