/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service652Service } from '../../services/service-652.service';

@Component({
  selector: 'app-comp-652',
  templateUrl: './comp-652.component.html',
  styleUrls: ['./comp-652.component.css']
})
export class Comp652Component implements OnInit {

  constructor(private _service: Service652Service) { }

  ngOnInit() {
  }

}
