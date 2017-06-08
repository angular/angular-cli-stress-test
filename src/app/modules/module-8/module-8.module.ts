/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module8RoutingModule } from './module-8-routing.module';
import { Module8CompComponent } from './components/module-8-comp/module-8-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module8RoutingModule
  ],
  declarations: [Module8CompComponent]
})
export class Module8Module { }
