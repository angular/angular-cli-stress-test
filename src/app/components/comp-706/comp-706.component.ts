/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service706Service } from '../../services/service-706.service';

@Component({
  selector: 'app-comp-706',
  templateUrl: './comp-706.component.html',
  styleUrls: ['./comp-706.component.css']
})
export class Comp706Component implements OnInit {

  constructor(private _service: Service706Service) { }

  ngOnInit() {
  }

}
