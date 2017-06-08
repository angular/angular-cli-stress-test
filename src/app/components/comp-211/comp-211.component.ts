/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service211Service } from '../../services/service-211.service';

@Component({
  selector: 'app-comp-211',
  templateUrl: './comp-211.component.html',
  styleUrls: ['./comp-211.component.css']
})
export class Comp211Component implements OnInit {

  constructor(private _service: Service211Service) { }

  ngOnInit() {
  }

}
