/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service169Service } from '../../services/service-169.service';

@Component({
  selector: 'app-comp-169',
  templateUrl: './comp-169.component.html',
  styleUrls: ['./comp-169.component.css']
})
export class Comp169Component implements OnInit {

  constructor(private _service: Service169Service) { }

  ngOnInit() {
  }

}
