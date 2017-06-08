/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service232Service } from '../../services/service-232.service';

@Component({
  selector: 'app-comp-232',
  templateUrl: './comp-232.component.html',
  styleUrls: ['./comp-232.component.css']
})
export class Comp232Component implements OnInit {

  constructor(private _service: Service232Service) { }

  ngOnInit() {
  }

}
