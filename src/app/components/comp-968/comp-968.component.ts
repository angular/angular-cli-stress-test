/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service968Service } from '../../services/service-968.service';

@Component({
  selector: 'app-comp-968',
  templateUrl: './comp-968.component.html',
  styleUrls: ['./comp-968.component.css']
})
export class Comp968Component implements OnInit {

  constructor(private _service: Service968Service) { }

  ngOnInit() {
  }

}
