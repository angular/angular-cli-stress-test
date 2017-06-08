/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service644Service } from '../../services/service-644.service';

@Component({
  selector: 'app-comp-644',
  templateUrl: './comp-644.component.html',
  styleUrls: ['./comp-644.component.css']
})
export class Comp644Component implements OnInit {

  constructor(private _service: Service644Service) { }

  ngOnInit() {
  }

}
