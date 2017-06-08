/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service126Service } from '../../services/service-126.service';

@Component({
  selector: 'app-comp-126',
  templateUrl: './comp-126.component.html',
  styleUrls: ['./comp-126.component.css']
})
export class Comp126Component implements OnInit {

  constructor(private _service: Service126Service) { }

  ngOnInit() {
  }

}
