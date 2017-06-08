/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module54RoutingModule } from './module-54-routing.module';
import { Module54CompComponent } from './components/module-54-comp/module-54-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module54RoutingModule
  ],
  declarations: [Module54CompComponent]
})
export class Module54Module { }
