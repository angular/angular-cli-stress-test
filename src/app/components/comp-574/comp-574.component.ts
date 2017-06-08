/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service574Service } from '../../services/service-574.service';

@Component({
  selector: 'app-comp-574',
  templateUrl: './comp-574.component.html',
  styleUrls: ['./comp-574.component.css']
})
export class Comp574Component implements OnInit {

  constructor(private _service: Service574Service) { }

  ngOnInit() {
  }

}
