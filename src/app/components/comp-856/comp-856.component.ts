/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service856Service } from '../../services/service-856.service';

@Component({
  selector: 'app-comp-856',
  templateUrl: './comp-856.component.html',
  styleUrls: ['./comp-856.component.css']
})
export class Comp856Component implements OnInit {

  constructor(private _service: Service856Service) { }

  ngOnInit() {
  }

}
