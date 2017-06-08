/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service983Service } from '../../services/service-983.service';

@Component({
  selector: 'app-comp-983',
  templateUrl: './comp-983.component.html',
  styleUrls: ['./comp-983.component.css']
})
export class Comp983Component implements OnInit {

  constructor(private _service: Service983Service) { }

  ngOnInit() {
  }

}
