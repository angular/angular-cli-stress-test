/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service946Service } from '../../services/service-946.service';

@Component({
  selector: 'app-comp-946',
  templateUrl: './comp-946.component.html',
  styleUrls: ['./comp-946.component.css']
})
export class Comp946Component implements OnInit {

  constructor(private _service: Service946Service) { }

  ngOnInit() {
  }

}
