/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service208Service } from '../../services/service-208.service';

@Component({
  selector: 'app-comp-208',
  templateUrl: './comp-208.component.html',
  styleUrls: ['./comp-208.component.css']
})
export class Comp208Component implements OnInit {

  constructor(private _service: Service208Service) { }

  ngOnInit() {
  }

}
