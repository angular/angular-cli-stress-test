/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service805Service } from '../../services/service-805.service';

@Component({
  selector: 'app-comp-805',
  templateUrl: './comp-805.component.html',
  styleUrls: ['./comp-805.component.css']
})
export class Comp805Component implements OnInit {

  constructor(private _service: Service805Service) { }

  ngOnInit() {
  }

}
