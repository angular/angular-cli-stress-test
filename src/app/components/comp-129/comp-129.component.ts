/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service129Service } from '../../services/service-129.service';

@Component({
  selector: 'app-comp-129',
  templateUrl: './comp-129.component.html',
  styleUrls: ['./comp-129.component.css']
})
export class Comp129Component implements OnInit {

  constructor(private _service: Service129Service) { }

  ngOnInit() {
  }

}
