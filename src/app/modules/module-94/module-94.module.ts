/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module94RoutingModule } from './module-94-routing.module';
import { Module94CompComponent } from './components/module-94-comp/module-94-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module94RoutingModule
  ],
  declarations: [Module94CompComponent]
})
export class Module94Module { }
