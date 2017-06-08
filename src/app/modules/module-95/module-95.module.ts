/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module95RoutingModule } from './module-95-routing.module';
import { Module95CompComponent } from './components/module-95-comp/module-95-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module95RoutingModule
  ],
  declarations: [Module95CompComponent]
})
export class Module95Module { }
