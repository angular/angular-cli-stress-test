/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service290Service } from '../../services/service-290.service';

@Component({
  selector: 'app-comp-290',
  templateUrl: './comp-290.component.html',
  styleUrls: ['./comp-290.component.css']
})
export class Comp290Component implements OnInit {

  constructor(private _service: Service290Service) { }

  ngOnInit() {
  }

}
