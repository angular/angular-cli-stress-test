/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service668Service } from '../../services/service-668.service';

@Component({
  selector: 'app-comp-668',
  templateUrl: './comp-668.component.html',
  styleUrls: ['./comp-668.component.css']
})
export class Comp668Component implements OnInit {

  constructor(private _service: Service668Service) { }

  ngOnInit() {
  }

}
