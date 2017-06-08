/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service475Service } from '../../services/service-475.service';

@Component({
  selector: 'app-comp-475',
  templateUrl: './comp-475.component.html',
  styleUrls: ['./comp-475.component.css']
})
export class Comp475Component implements OnInit {

  constructor(private _service: Service475Service) { }

  ngOnInit() {
  }

}
