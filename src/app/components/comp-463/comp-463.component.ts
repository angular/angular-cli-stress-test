/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service463Service } from '../../services/service-463.service';

@Component({
  selector: 'app-comp-463',
  templateUrl: './comp-463.component.html',
  styleUrls: ['./comp-463.component.css']
})
export class Comp463Component implements OnInit {

  constructor(private _service: Service463Service) { }

  ngOnInit() {
  }

}
