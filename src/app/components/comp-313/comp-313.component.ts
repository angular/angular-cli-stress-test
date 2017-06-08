/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service313Service } from '../../services/service-313.service';

@Component({
  selector: 'app-comp-313',
  templateUrl: './comp-313.component.html',
  styleUrls: ['./comp-313.component.css']
})
export class Comp313Component implements OnInit {

  constructor(private _service: Service313Service) { }

  ngOnInit() {
  }

}
