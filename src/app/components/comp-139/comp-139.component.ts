/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service139Service } from '../../services/service-139.service';

@Component({
  selector: 'app-comp-139',
  templateUrl: './comp-139.component.html',
  styleUrls: ['./comp-139.component.css']
})
export class Comp139Component implements OnInit {

  constructor(private _service: Service139Service) { }

  ngOnInit() {
  }

}
