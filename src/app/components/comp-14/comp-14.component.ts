/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service14Service } from '../../services/service-14.service';

@Component({
  selector: 'app-comp-14',
  templateUrl: './comp-14.component.html',
  styleUrls: ['./comp-14.component.css']
})
export class Comp14Component implements OnInit {

  constructor(private _service: Service14Service) { }

  ngOnInit() {
  }

}
