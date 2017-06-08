/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service645Service } from '../../services/service-645.service';

@Component({
  selector: 'app-comp-645',
  templateUrl: './comp-645.component.html',
  styleUrls: ['./comp-645.component.css']
})
export class Comp645Component implements OnInit {

  constructor(private _service: Service645Service) { }

  ngOnInit() {
  }

}
