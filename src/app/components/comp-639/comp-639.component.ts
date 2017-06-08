/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service639Service } from '../../services/service-639.service';

@Component({
  selector: 'app-comp-639',
  templateUrl: './comp-639.component.html',
  styleUrls: ['./comp-639.component.css']
})
export class Comp639Component implements OnInit {

  constructor(private _service: Service639Service) { }

  ngOnInit() {
  }

}
