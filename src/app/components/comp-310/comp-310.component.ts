/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service310Service } from '../../services/service-310.service';

@Component({
  selector: 'app-comp-310',
  templateUrl: './comp-310.component.html',
  styleUrls: ['./comp-310.component.css']
})
export class Comp310Component implements OnInit {

  constructor(private _service: Service310Service) { }

  ngOnInit() {
  }

}
