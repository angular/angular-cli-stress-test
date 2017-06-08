/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service881Service } from '../../services/service-881.service';

@Component({
  selector: 'app-comp-881',
  templateUrl: './comp-881.component.html',
  styleUrls: ['./comp-881.component.css']
})
export class Comp881Component implements OnInit {

  constructor(private _service: Service881Service) { }

  ngOnInit() {
  }

}
