/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service98Service } from '../../services/service-98.service';

@Component({
  selector: 'app-comp-98',
  templateUrl: './comp-98.component.html',
  styleUrls: ['./comp-98.component.css']
})
export class Comp98Component implements OnInit {

  constructor(private _service: Service98Service) { }

  ngOnInit() {
  }

}
