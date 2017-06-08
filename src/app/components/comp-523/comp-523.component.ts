/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service523Service } from '../../services/service-523.service';

@Component({
  selector: 'app-comp-523',
  templateUrl: './comp-523.component.html',
  styleUrls: ['./comp-523.component.css']
})
export class Comp523Component implements OnInit {

  constructor(private _service: Service523Service) { }

  ngOnInit() {
  }

}
