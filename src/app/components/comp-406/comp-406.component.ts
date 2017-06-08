/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service406Service } from '../../services/service-406.service';

@Component({
  selector: 'app-comp-406',
  templateUrl: './comp-406.component.html',
  styleUrls: ['./comp-406.component.css']
})
export class Comp406Component implements OnInit {

  constructor(private _service: Service406Service) { }

  ngOnInit() {
  }

}
