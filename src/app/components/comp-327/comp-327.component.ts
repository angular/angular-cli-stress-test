/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service327Service } from '../../services/service-327.service';

@Component({
  selector: 'app-comp-327',
  templateUrl: './comp-327.component.html',
  styleUrls: ['./comp-327.component.css']
})
export class Comp327Component implements OnInit {

  constructor(private _service: Service327Service) { }

  ngOnInit() {
  }

}
