/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service867Service } from '../../services/service-867.service';

@Component({
  selector: 'app-comp-867',
  templateUrl: './comp-867.component.html',
  styleUrls: ['./comp-867.component.css']
})
export class Comp867Component implements OnInit {

  constructor(private _service: Service867Service) { }

  ngOnInit() {
  }

}
