/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service379Service } from '../../services/service-379.service';

@Component({
  selector: 'app-comp-379',
  templateUrl: './comp-379.component.html',
  styleUrls: ['./comp-379.component.css']
})
export class Comp379Component implements OnInit {

  constructor(private _service: Service379Service) { }

  ngOnInit() {
  }

}
