/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service307Service } from '../../services/service-307.service';

@Component({
  selector: 'app-comp-307',
  templateUrl: './comp-307.component.html',
  styleUrls: ['./comp-307.component.css']
})
export class Comp307Component implements OnInit {

  constructor(private _service: Service307Service) { }

  ngOnInit() {
  }

}
