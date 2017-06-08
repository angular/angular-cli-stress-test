/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service183Service } from '../../services/service-183.service';

@Component({
  selector: 'app-comp-183',
  templateUrl: './comp-183.component.html',
  styleUrls: ['./comp-183.component.css']
})
export class Comp183Component implements OnInit {

  constructor(private _service: Service183Service) { }

  ngOnInit() {
  }

}
