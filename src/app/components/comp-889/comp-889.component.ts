/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service889Service } from '../../services/service-889.service';

@Component({
  selector: 'app-comp-889',
  templateUrl: './comp-889.component.html',
  styleUrls: ['./comp-889.component.css']
})
export class Comp889Component implements OnInit {

  constructor(private _service: Service889Service) { }

  ngOnInit() {
  }

}
