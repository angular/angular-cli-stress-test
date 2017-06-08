/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service933Service } from '../../services/service-933.service';

@Component({
  selector: 'app-comp-933',
  templateUrl: './comp-933.component.html',
  styleUrls: ['./comp-933.component.css']
})
export class Comp933Component implements OnInit {

  constructor(private _service: Service933Service) { }

  ngOnInit() {
  }

}
