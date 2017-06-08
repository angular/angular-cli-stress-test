/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service537Service } from '../../services/service-537.service';

@Component({
  selector: 'app-comp-537',
  templateUrl: './comp-537.component.html',
  styleUrls: ['./comp-537.component.css']
})
export class Comp537Component implements OnInit {

  constructor(private _service: Service537Service) { }

  ngOnInit() {
  }

}
