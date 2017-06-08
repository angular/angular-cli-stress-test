/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service622Service } from '../../services/service-622.service';

@Component({
  selector: 'app-comp-622',
  templateUrl: './comp-622.component.html',
  styleUrls: ['./comp-622.component.css']
})
export class Comp622Component implements OnInit {

  constructor(private _service: Service622Service) { }

  ngOnInit() {
  }

}
