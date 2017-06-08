/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service343Service } from '../../services/service-343.service';

@Component({
  selector: 'app-comp-343',
  templateUrl: './comp-343.component.html',
  styleUrls: ['./comp-343.component.css']
})
export class Comp343Component implements OnInit {

  constructor(private _service: Service343Service) { }

  ngOnInit() {
  }

}
