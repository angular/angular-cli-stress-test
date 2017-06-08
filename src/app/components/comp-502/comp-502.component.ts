/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service502Service } from '../../services/service-502.service';

@Component({
  selector: 'app-comp-502',
  templateUrl: './comp-502.component.html',
  styleUrls: ['./comp-502.component.css']
})
export class Comp502Component implements OnInit {

  constructor(private _service: Service502Service) { }

  ngOnInit() {
  }

}
