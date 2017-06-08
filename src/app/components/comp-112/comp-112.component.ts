/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service112Service } from '../../services/service-112.service';

@Component({
  selector: 'app-comp-112',
  templateUrl: './comp-112.component.html',
  styleUrls: ['./comp-112.component.css']
})
export class Comp112Component implements OnInit {

  constructor(private _service: Service112Service) { }

  ngOnInit() {
  }

}
