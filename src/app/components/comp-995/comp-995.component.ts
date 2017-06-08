/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service995Service } from '../../services/service-995.service';

@Component({
  selector: 'app-comp-995',
  templateUrl: './comp-995.component.html',
  styleUrls: ['./comp-995.component.css']
})
export class Comp995Component implements OnInit {

  constructor(private _service: Service995Service) { }

  ngOnInit() {
  }

}
