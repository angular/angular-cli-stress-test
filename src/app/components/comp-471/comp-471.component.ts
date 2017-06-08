/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service471Service } from '../../services/service-471.service';

@Component({
  selector: 'app-comp-471',
  templateUrl: './comp-471.component.html',
  styleUrls: ['./comp-471.component.css']
})
export class Comp471Component implements OnInit {

  constructor(private _service: Service471Service) { }

  ngOnInit() {
  }

}
