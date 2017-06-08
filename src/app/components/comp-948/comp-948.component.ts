/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service948Service } from '../../services/service-948.service';

@Component({
  selector: 'app-comp-948',
  templateUrl: './comp-948.component.html',
  styleUrls: ['./comp-948.component.css']
})
export class Comp948Component implements OnInit {

  constructor(private _service: Service948Service) { }

  ngOnInit() {
  }

}
