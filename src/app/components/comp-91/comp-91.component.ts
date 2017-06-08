/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service91Service } from '../../services/service-91.service';

@Component({
  selector: 'app-comp-91',
  templateUrl: './comp-91.component.html',
  styleUrls: ['./comp-91.component.css']
})
export class Comp91Component implements OnInit {

  constructor(private _service: Service91Service) { }

  ngOnInit() {
  }

}
