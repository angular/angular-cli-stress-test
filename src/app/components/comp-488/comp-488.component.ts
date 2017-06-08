/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service488Service } from '../../services/service-488.service';

@Component({
  selector: 'app-comp-488',
  templateUrl: './comp-488.component.html',
  styleUrls: ['./comp-488.component.css']
})
export class Comp488Component implements OnInit {

  constructor(private _service: Service488Service) { }

  ngOnInit() {
  }

}
