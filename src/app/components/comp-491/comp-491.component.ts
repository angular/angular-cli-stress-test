/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service491Service } from '../../services/service-491.service';

@Component({
  selector: 'app-comp-491',
  templateUrl: './comp-491.component.html',
  styleUrls: ['./comp-491.component.css']
})
export class Comp491Component implements OnInit {

  constructor(private _service: Service491Service) { }

  ngOnInit() {
  }

}
