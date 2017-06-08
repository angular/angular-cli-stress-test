/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service550Service } from '../../services/service-550.service';

@Component({
  selector: 'app-comp-550',
  templateUrl: './comp-550.component.html',
  styleUrls: ['./comp-550.component.css']
})
export class Comp550Component implements OnInit {

  constructor(private _service: Service550Service) { }

  ngOnInit() {
  }

}
