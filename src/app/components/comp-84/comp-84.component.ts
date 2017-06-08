/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service84Service } from '../../services/service-84.service';

@Component({
  selector: 'app-comp-84',
  templateUrl: './comp-84.component.html',
  styleUrls: ['./comp-84.component.css']
})
export class Comp84Component implements OnInit {

  constructor(private _service: Service84Service) { }

  ngOnInit() {
  }

}
