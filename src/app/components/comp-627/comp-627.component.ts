/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service627Service } from '../../services/service-627.service';

@Component({
  selector: 'app-comp-627',
  templateUrl: './comp-627.component.html',
  styleUrls: ['./comp-627.component.css']
})
export class Comp627Component implements OnInit {

  constructor(private _service: Service627Service) { }

  ngOnInit() {
  }

}
