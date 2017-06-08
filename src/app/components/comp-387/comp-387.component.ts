/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service387Service } from '../../services/service-387.service';

@Component({
  selector: 'app-comp-387',
  templateUrl: './comp-387.component.html',
  styleUrls: ['./comp-387.component.css']
})
export class Comp387Component implements OnInit {

  constructor(private _service: Service387Service) { }

  ngOnInit() {
  }

}
