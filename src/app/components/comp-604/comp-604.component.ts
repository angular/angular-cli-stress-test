/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service604Service } from '../../services/service-604.service';

@Component({
  selector: 'app-comp-604',
  templateUrl: './comp-604.component.html',
  styleUrls: ['./comp-604.component.css']
})
export class Comp604Component implements OnInit {

  constructor(private _service: Service604Service) { }

  ngOnInit() {
  }

}
