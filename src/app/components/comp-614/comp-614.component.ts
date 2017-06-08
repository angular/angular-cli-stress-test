/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service614Service } from '../../services/service-614.service';

@Component({
  selector: 'app-comp-614',
  templateUrl: './comp-614.component.html',
  styleUrls: ['./comp-614.component.css']
})
export class Comp614Component implements OnInit {

  constructor(private _service: Service614Service) { }

  ngOnInit() {
  }

}
