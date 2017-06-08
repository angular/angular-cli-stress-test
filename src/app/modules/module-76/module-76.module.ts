/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module76RoutingModule } from './module-76-routing.module';
import { Module76CompComponent } from './components/module-76-comp/module-76-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module76RoutingModule
  ],
  declarations: [Module76CompComponent]
})
export class Module76Module { }
