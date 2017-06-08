/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service918Service } from '../../services/service-918.service';

@Component({
  selector: 'app-comp-918',
  templateUrl: './comp-918.component.html',
  styleUrls: ['./comp-918.component.css']
})
export class Comp918Component implements OnInit {

  constructor(private _service: Service918Service) { }

  ngOnInit() {
  }

}
