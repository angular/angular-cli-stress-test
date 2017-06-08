/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module59RoutingModule } from './module-59-routing.module';
import { Module59CompComponent } from './components/module-59-comp/module-59-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module59RoutingModule
  ],
  declarations: [Module59CompComponent]
})
export class Module59Module { }
