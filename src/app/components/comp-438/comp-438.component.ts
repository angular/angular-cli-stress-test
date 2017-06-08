/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service438Service } from '../../services/service-438.service';

@Component({
  selector: 'app-comp-438',
  templateUrl: './comp-438.component.html',
  styleUrls: ['./comp-438.component.css']
})
export class Comp438Component implements OnInit {

  constructor(private _service: Service438Service) { }

  ngOnInit() {
  }

}
