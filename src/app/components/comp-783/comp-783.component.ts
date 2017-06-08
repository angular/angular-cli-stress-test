/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service783Service } from '../../services/service-783.service';

@Component({
  selector: 'app-comp-783',
  templateUrl: './comp-783.component.html',
  styleUrls: ['./comp-783.component.css']
})
export class Comp783Component implements OnInit {

  constructor(private _service: Service783Service) { }

  ngOnInit() {
  }

}
