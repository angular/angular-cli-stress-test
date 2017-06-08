/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service703Service } from '../../services/service-703.service';

@Component({
  selector: 'app-comp-703',
  templateUrl: './comp-703.component.html',
  styleUrls: ['./comp-703.component.css']
})
export class Comp703Component implements OnInit {

  constructor(private _service: Service703Service) { }

  ngOnInit() {
  }

}
