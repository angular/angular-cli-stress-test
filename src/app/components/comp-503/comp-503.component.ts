/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service503Service } from '../../services/service-503.service';

@Component({
  selector: 'app-comp-503',
  templateUrl: './comp-503.component.html',
  styleUrls: ['./comp-503.component.css']
})
export class Comp503Component implements OnInit {

  constructor(private _service: Service503Service) { }

  ngOnInit() {
  }

}
