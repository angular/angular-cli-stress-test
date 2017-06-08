/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service719Service } from '../../services/service-719.service';

@Component({
  selector: 'app-comp-719',
  templateUrl: './comp-719.component.html',
  styleUrls: ['./comp-719.component.css']
})
export class Comp719Component implements OnInit {

  constructor(private _service: Service719Service) { }

  ngOnInit() {
  }

}
