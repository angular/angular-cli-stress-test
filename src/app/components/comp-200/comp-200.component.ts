/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service200Service } from '../../services/service-200.service';

@Component({
  selector: 'app-comp-200',
  templateUrl: './comp-200.component.html',
  styleUrls: ['./comp-200.component.css']
})
export class Comp200Component implements OnInit {

  constructor(private _service: Service200Service) { }

  ngOnInit() {
  }

}
