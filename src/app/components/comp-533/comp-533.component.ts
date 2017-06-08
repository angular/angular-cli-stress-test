/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service533Service } from '../../services/service-533.service';

@Component({
  selector: 'app-comp-533',
  templateUrl: './comp-533.component.html',
  styleUrls: ['./comp-533.component.css']
})
export class Comp533Component implements OnInit {

  constructor(private _service: Service533Service) { }

  ngOnInit() {
  }

}
