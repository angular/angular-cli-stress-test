/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service40Service } from '../../services/service-40.service';

@Component({
  selector: 'app-comp-40',
  templateUrl: './comp-40.component.html',
  styleUrls: ['./comp-40.component.css']
})
export class Comp40Component implements OnInit {

  constructor(private _service: Service40Service) { }

  ngOnInit() {
  }

}
