/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service541Service } from '../../services/service-541.service';

@Component({
  selector: 'app-comp-541',
  templateUrl: './comp-541.component.html',
  styleUrls: ['./comp-541.component.css']
})
export class Comp541Component implements OnInit {

  constructor(private _service: Service541Service) { }

  ngOnInit() {
  }

}
