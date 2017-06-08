/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service392Service } from '../../services/service-392.service';

@Component({
  selector: 'app-comp-392',
  templateUrl: './comp-392.component.html',
  styleUrls: ['./comp-392.component.css']
})
export class Comp392Component implements OnInit {

  constructor(private _service: Service392Service) { }

  ngOnInit() {
  }

}
