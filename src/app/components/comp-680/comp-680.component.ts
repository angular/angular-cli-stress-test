/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service680Service } from '../../services/service-680.service';

@Component({
  selector: 'app-comp-680',
  templateUrl: './comp-680.component.html',
  styleUrls: ['./comp-680.component.css']
})
export class Comp680Component implements OnInit {

  constructor(private _service: Service680Service) { }

  ngOnInit() {
  }

}
