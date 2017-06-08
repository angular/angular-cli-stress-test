/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service72Service } from '../../services/service-72.service';

@Component({
  selector: 'app-comp-72',
  templateUrl: './comp-72.component.html',
  styleUrls: ['./comp-72.component.css']
})
export class Comp72Component implements OnInit {

  constructor(private _service: Service72Service) { }

  ngOnInit() {
  }

}
