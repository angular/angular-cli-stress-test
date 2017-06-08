/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service316Service } from '../../services/service-316.service';

@Component({
  selector: 'app-comp-316',
  templateUrl: './comp-316.component.html',
  styleUrls: ['./comp-316.component.css']
})
export class Comp316Component implements OnInit {

  constructor(private _service: Service316Service) { }

  ngOnInit() {
  }

}
