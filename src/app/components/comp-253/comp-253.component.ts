/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service253Service } from '../../services/service-253.service';

@Component({
  selector: 'app-comp-253',
  templateUrl: './comp-253.component.html',
  styleUrls: ['./comp-253.component.css']
})
export class Comp253Component implements OnInit {

  constructor(private _service: Service253Service) { }

  ngOnInit() {
  }

}
