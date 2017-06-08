/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module23RoutingModule } from './module-23-routing.module';
import { Module23CompComponent } from './components/module-23-comp/module-23-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module23RoutingModule
  ],
  declarations: [Module23CompComponent]
})
export class Module23Module { }
