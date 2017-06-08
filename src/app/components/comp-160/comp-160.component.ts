/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service160Service } from '../../services/service-160.service';

@Component({
  selector: 'app-comp-160',
  templateUrl: './comp-160.component.html',
  styleUrls: ['./comp-160.component.css']
})
export class Comp160Component implements OnInit {

  constructor(private _service: Service160Service) { }

  ngOnInit() {
  }

}
