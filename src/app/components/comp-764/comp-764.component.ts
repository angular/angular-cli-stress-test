/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service764Service } from '../../services/service-764.service';

@Component({
  selector: 'app-comp-764',
  templateUrl: './comp-764.component.html',
  styleUrls: ['./comp-764.component.css']
})
export class Comp764Component implements OnInit {

  constructor(private _service: Service764Service) { }

  ngOnInit() {
  }

}
