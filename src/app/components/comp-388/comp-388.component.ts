/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service388Service } from '../../services/service-388.service';

@Component({
  selector: 'app-comp-388',
  templateUrl: './comp-388.component.html',
  styleUrls: ['./comp-388.component.css']
})
export class Comp388Component implements OnInit {

  constructor(private _service: Service388Service) { }

  ngOnInit() {
  }

}
