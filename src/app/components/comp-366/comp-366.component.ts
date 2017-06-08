/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service366Service } from '../../services/service-366.service';

@Component({
  selector: 'app-comp-366',
  templateUrl: './comp-366.component.html',
  styleUrls: ['./comp-366.component.css']
})
export class Comp366Component implements OnInit {

  constructor(private _service: Service366Service) { }

  ngOnInit() {
  }

}
