/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service5Service } from '../../services/service-5.service';

@Component({
  selector: 'app-comp-5',
  templateUrl: './comp-5.component.html',
  styleUrls: ['./comp-5.component.css']
})
export class Comp5Component implements OnInit {

  constructor(private _service: Service5Service) { }

  ngOnInit() {
  }

}
