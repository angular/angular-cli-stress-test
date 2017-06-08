/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service301Service } from '../../services/service-301.service';

@Component({
  selector: 'app-comp-301',
  templateUrl: './comp-301.component.html',
  styleUrls: ['./comp-301.component.css']
})
export class Comp301Component implements OnInit {

  constructor(private _service: Service301Service) { }

  ngOnInit() {
  }

}
