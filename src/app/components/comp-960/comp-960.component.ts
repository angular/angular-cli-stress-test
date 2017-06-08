/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service960Service } from '../../services/service-960.service';

@Component({
  selector: 'app-comp-960',
  templateUrl: './comp-960.component.html',
  styleUrls: ['./comp-960.component.css']
})
export class Comp960Component implements OnInit {

  constructor(private _service: Service960Service) { }

  ngOnInit() {
  }

}
