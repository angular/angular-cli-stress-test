/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service27Service } from '../../services/service-27.service';

@Component({
  selector: 'app-comp-27',
  templateUrl: './comp-27.component.html',
  styleUrls: ['./comp-27.component.css']
})
export class Comp27Component implements OnInit {

  constructor(private _service: Service27Service) { }

  ngOnInit() {
  }

}
