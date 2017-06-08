/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service943Service } from '../../services/service-943.service';

@Component({
  selector: 'app-comp-943',
  templateUrl: './comp-943.component.html',
  styleUrls: ['./comp-943.component.css']
})
export class Comp943Component implements OnInit {

  constructor(private _service: Service943Service) { }

  ngOnInit() {
  }

}
