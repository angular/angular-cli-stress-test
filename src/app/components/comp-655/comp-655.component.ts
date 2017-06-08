/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service655Service } from '../../services/service-655.service';

@Component({
  selector: 'app-comp-655',
  templateUrl: './comp-655.component.html',
  styleUrls: ['./comp-655.component.css']
})
export class Comp655Component implements OnInit {

  constructor(private _service: Service655Service) { }

  ngOnInit() {
  }

}
