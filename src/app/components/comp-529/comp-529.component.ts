/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service529Service } from '../../services/service-529.service';

@Component({
  selector: 'app-comp-529',
  templateUrl: './comp-529.component.html',
  styleUrls: ['./comp-529.component.css']
})
export class Comp529Component implements OnInit {

  constructor(private _service: Service529Service) { }

  ngOnInit() {
  }

}
