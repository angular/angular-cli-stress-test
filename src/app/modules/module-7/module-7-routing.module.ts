/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module7CompComponent } from './components/module-7-comp/module-7-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module7CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module7RoutingModule { }
