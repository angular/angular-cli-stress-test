/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service762Service } from '../../services/service-762.service';

@Component({
  selector: 'app-comp-762',
  templateUrl: './comp-762.component.html',
  styleUrls: ['./comp-762.component.css']
})
export class Comp762Component implements OnInit {

  constructor(private _service: Service762Service) { }

  ngOnInit() {
  }

}
