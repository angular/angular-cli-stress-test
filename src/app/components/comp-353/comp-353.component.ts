/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service353Service } from '../../services/service-353.service';

@Component({
  selector: 'app-comp-353',
  templateUrl: './comp-353.component.html',
  styleUrls: ['./comp-353.component.css']
})
export class Comp353Component implements OnInit {

  constructor(private _service: Service353Service) { }

  ngOnInit() {
  }

}
