/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service13Service } from '../../services/service-13.service';

@Component({
  selector: 'app-comp-13',
  templateUrl: './comp-13.component.html',
  styleUrls: ['./comp-13.component.css']
})
export class Comp13Component implements OnInit {

  constructor(private _service: Service13Service) { }

  ngOnInit() {
  }

}
