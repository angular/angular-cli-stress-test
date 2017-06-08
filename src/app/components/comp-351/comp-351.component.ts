/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service351Service } from '../../services/service-351.service';

@Component({
  selector: 'app-comp-351',
  templateUrl: './comp-351.component.html',
  styleUrls: ['./comp-351.component.css']
})
export class Comp351Component implements OnInit {

  constructor(private _service: Service351Service) { }

  ngOnInit() {
  }

}
