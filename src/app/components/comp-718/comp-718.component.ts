/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service718Service } from '../../services/service-718.service';

@Component({
  selector: 'app-comp-718',
  templateUrl: './comp-718.component.html',
  styleUrls: ['./comp-718.component.css']
})
export class Comp718Component implements OnInit {

  constructor(private _service: Service718Service) { }

  ngOnInit() {
  }

}
