/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service198Service } from '../../services/service-198.service';

@Component({
  selector: 'app-comp-198',
  templateUrl: './comp-198.component.html',
  styleUrls: ['./comp-198.component.css']
})
export class Comp198Component implements OnInit {

  constructor(private _service: Service198Service) { }

  ngOnInit() {
  }

}
