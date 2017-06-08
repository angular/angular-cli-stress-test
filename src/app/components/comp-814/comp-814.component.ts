/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service814Service } from '../../services/service-814.service';

@Component({
  selector: 'app-comp-814',
  templateUrl: './comp-814.component.html',
  styleUrls: ['./comp-814.component.css']
})
export class Comp814Component implements OnInit {

  constructor(private _service: Service814Service) { }

  ngOnInit() {
  }

}
