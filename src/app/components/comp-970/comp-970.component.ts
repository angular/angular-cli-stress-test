/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service970Service } from '../../services/service-970.service';

@Component({
  selector: 'app-comp-970',
  templateUrl: './comp-970.component.html',
  styleUrls: ['./comp-970.component.css']
})
export class Comp970Component implements OnInit {

  constructor(private _service: Service970Service) { }

  ngOnInit() {
  }

}
