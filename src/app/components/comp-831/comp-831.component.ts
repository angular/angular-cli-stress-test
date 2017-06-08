/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service831Service } from '../../services/service-831.service';

@Component({
  selector: 'app-comp-831',
  templateUrl: './comp-831.component.html',
  styleUrls: ['./comp-831.component.css']
})
export class Comp831Component implements OnInit {

  constructor(private _service: Service831Service) { }

  ngOnInit() {
  }

}
