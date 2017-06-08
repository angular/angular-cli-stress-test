/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service567Service } from '../../services/service-567.service';

@Component({
  selector: 'app-comp-567',
  templateUrl: './comp-567.component.html',
  styleUrls: ['./comp-567.component.css']
})
export class Comp567Component implements OnInit {

  constructor(private _service: Service567Service) { }

  ngOnInit() {
  }

}
