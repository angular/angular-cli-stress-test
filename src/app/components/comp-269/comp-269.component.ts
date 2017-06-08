/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service269Service } from '../../services/service-269.service';

@Component({
  selector: 'app-comp-269',
  templateUrl: './comp-269.component.html',
  styleUrls: ['./comp-269.component.css']
})
export class Comp269Component implements OnInit {

  constructor(private _service: Service269Service) { }

  ngOnInit() {
  }

}
