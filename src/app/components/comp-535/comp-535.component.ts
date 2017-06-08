/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service535Service } from '../../services/service-535.service';

@Component({
  selector: 'app-comp-535',
  templateUrl: './comp-535.component.html',
  styleUrls: ['./comp-535.component.css']
})
export class Comp535Component implements OnInit {

  constructor(private _service: Service535Service) { }

  ngOnInit() {
  }

}
