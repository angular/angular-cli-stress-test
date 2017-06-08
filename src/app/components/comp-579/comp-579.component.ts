/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service579Service } from '../../services/service-579.service';

@Component({
  selector: 'app-comp-579',
  templateUrl: './comp-579.component.html',
  styleUrls: ['./comp-579.component.css']
})
export class Comp579Component implements OnInit {

  constructor(private _service: Service579Service) { }

  ngOnInit() {
  }

}
