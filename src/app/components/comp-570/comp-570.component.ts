/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service570Service } from '../../services/service-570.service';

@Component({
  selector: 'app-comp-570',
  templateUrl: './comp-570.component.html',
  styleUrls: ['./comp-570.component.css']
})
export class Comp570Component implements OnInit {

  constructor(private _service: Service570Service) { }

  ngOnInit() {
  }

}
