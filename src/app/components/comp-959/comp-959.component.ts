/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service959Service } from '../../services/service-959.service';

@Component({
  selector: 'app-comp-959',
  templateUrl: './comp-959.component.html',
  styleUrls: ['./comp-959.component.css']
})
export class Comp959Component implements OnInit {

  constructor(private _service: Service959Service) { }

  ngOnInit() {
  }

}
