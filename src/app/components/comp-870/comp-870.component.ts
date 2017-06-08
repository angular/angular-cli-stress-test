/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service870Service } from '../../services/service-870.service';

@Component({
  selector: 'app-comp-870',
  templateUrl: './comp-870.component.html',
  styleUrls: ['./comp-870.component.css']
})
export class Comp870Component implements OnInit {

  constructor(private _service: Service870Service) { }

  ngOnInit() {
  }

}
