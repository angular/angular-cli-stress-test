/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service411Service } from '../../services/service-411.service';

@Component({
  selector: 'app-comp-411',
  templateUrl: './comp-411.component.html',
  styleUrls: ['./comp-411.component.css']
})
export class Comp411Component implements OnInit {

  constructor(private _service: Service411Service) { }

  ngOnInit() {
  }

}
