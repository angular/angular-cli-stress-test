/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service743Service } from '../../services/service-743.service';

@Component({
  selector: 'app-comp-743',
  templateUrl: './comp-743.component.html',
  styleUrls: ['./comp-743.component.css']
})
export class Comp743Component implements OnInit {

  constructor(private _service: Service743Service) { }

  ngOnInit() {
  }

}
