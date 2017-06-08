/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service87Service } from '../../services/service-87.service';

@Component({
  selector: 'app-comp-87',
  templateUrl: './comp-87.component.html',
  styleUrls: ['./comp-87.component.css']
})
export class Comp87Component implements OnInit {

  constructor(private _service: Service87Service) { }

  ngOnInit() {
  }

}
