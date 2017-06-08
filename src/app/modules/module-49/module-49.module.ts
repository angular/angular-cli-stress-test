/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module49RoutingModule } from './module-49-routing.module';
import { Module49CompComponent } from './components/module-49-comp/module-49-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module49RoutingModule
  ],
  declarations: [Module49CompComponent]
})
export class Module49Module { }
