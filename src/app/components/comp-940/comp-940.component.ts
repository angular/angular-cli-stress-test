/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service940Service } from '../../services/service-940.service';

@Component({
  selector: 'app-comp-940',
  templateUrl: './comp-940.component.html',
  styleUrls: ['./comp-940.component.css']
})
export class Comp940Component implements OnInit {

  constructor(private _service: Service940Service) { }

  ngOnInit() {
  }

}
