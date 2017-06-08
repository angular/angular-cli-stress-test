/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service423Service } from '../../services/service-423.service';

@Component({
  selector: 'app-comp-423',
  templateUrl: './comp-423.component.html',
  styleUrls: ['./comp-423.component.css']
})
export class Comp423Component implements OnInit {

  constructor(private _service: Service423Service) { }

  ngOnInit() {
  }

}
