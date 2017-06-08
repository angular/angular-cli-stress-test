/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module68RoutingModule } from './module-68-routing.module';
import { Module68CompComponent } from './components/module-68-comp/module-68-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module68RoutingModule
  ],
  declarations: [Module68CompComponent]
})
export class Module68Module { }
