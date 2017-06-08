/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service18Service } from '../../services/service-18.service';

@Component({
  selector: 'app-comp-18',
  templateUrl: './comp-18.component.html',
  styleUrls: ['./comp-18.component.css']
})
export class Comp18Component implements OnInit {

  constructor(private _service: Service18Service) { }

  ngOnInit() {
  }

}
