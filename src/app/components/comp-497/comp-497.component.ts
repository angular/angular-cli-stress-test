/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service497Service } from '../../services/service-497.service';

@Component({
  selector: 'app-comp-497',
  templateUrl: './comp-497.component.html',
  styleUrls: ['./comp-497.component.css']
})
export class Comp497Component implements OnInit {

  constructor(private _service: Service497Service) { }

  ngOnInit() {
  }

}
