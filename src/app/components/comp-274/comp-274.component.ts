/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service274Service } from '../../services/service-274.service';

@Component({
  selector: 'app-comp-274',
  templateUrl: './comp-274.component.html',
  styleUrls: ['./comp-274.component.css']
})
export class Comp274Component implements OnInit {

  constructor(private _service: Service274Service) { }

  ngOnInit() {
  }

}
