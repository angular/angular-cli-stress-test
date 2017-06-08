/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service151Service } from '../../services/service-151.service';

@Component({
  selector: 'app-comp-151',
  templateUrl: './comp-151.component.html',
  styleUrls: ['./comp-151.component.css']
})
export class Comp151Component implements OnInit {

  constructor(private _service: Service151Service) { }

  ngOnInit() {
  }

}
