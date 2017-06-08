/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service852Service } from '../../services/service-852.service';

@Component({
  selector: 'app-comp-852',
  templateUrl: './comp-852.component.html',
  styleUrls: ['./comp-852.component.css']
})
export class Comp852Component implements OnInit {

  constructor(private _service: Service852Service) { }

  ngOnInit() {
  }

}
