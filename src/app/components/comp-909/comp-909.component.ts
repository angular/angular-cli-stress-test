/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service909Service } from '../../services/service-909.service';

@Component({
  selector: 'app-comp-909',
  templateUrl: './comp-909.component.html',
  styleUrls: ['./comp-909.component.css']
})
export class Comp909Component implements OnInit {

  constructor(private _service: Service909Service) { }

  ngOnInit() {
  }

}
