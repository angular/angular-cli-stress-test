/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service584Service } from '../../services/service-584.service';

@Component({
  selector: 'app-comp-584',
  templateUrl: './comp-584.component.html',
  styleUrls: ['./comp-584.component.css']
})
export class Comp584Component implements OnInit {

  constructor(private _service: Service584Service) { }

  ngOnInit() {
  }

}
