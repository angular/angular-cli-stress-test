/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service674Service } from '../../services/service-674.service';

@Component({
  selector: 'app-comp-674',
  templateUrl: './comp-674.component.html',
  styleUrls: ['./comp-674.component.css']
})
export class Comp674Component implements OnInit {

  constructor(private _service: Service674Service) { }

  ngOnInit() {
  }

}
