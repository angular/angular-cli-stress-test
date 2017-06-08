/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service106Service } from '../../services/service-106.service';

@Component({
  selector: 'app-comp-106',
  templateUrl: './comp-106.component.html',
  styleUrls: ['./comp-106.component.css']
})
export class Comp106Component implements OnInit {

  constructor(private _service: Service106Service) { }

  ngOnInit() {
  }

}
