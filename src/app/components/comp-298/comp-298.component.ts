/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service298Service } from '../../services/service-298.service';

@Component({
  selector: 'app-comp-298',
  templateUrl: './comp-298.component.html',
  styleUrls: ['./comp-298.component.css']
})
export class Comp298Component implements OnInit {

  constructor(private _service: Service298Service) { }

  ngOnInit() {
  }

}
