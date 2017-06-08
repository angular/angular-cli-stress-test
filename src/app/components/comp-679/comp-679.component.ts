/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service679Service } from '../../services/service-679.service';

@Component({
  selector: 'app-comp-679',
  templateUrl: './comp-679.component.html',
  styleUrls: ['./comp-679.component.css']
})
export class Comp679Component implements OnInit {

  constructor(private _service: Service679Service) { }

  ngOnInit() {
  }

}
