/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module17RoutingModule } from './module-17-routing.module';
import { Module17CompComponent } from './components/module-17-comp/module-17-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module17RoutingModule
  ],
  declarations: [Module17CompComponent]
})
export class Module17Module { }
