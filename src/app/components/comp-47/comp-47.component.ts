/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service47Service } from '../../services/service-47.service';

@Component({
  selector: 'app-comp-47',
  templateUrl: './comp-47.component.html',
  styleUrls: ['./comp-47.component.css']
})
export class Comp47Component implements OnInit {

  constructor(private _service: Service47Service) { }

  ngOnInit() {
  }

}
