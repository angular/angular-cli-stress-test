/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service585Service } from '../../services/service-585.service';

@Component({
  selector: 'app-comp-585',
  templateUrl: './comp-585.component.html',
  styleUrls: ['./comp-585.component.css']
})
export class Comp585Component implements OnInit {

  constructor(private _service: Service585Service) { }

  ngOnInit() {
  }

}
