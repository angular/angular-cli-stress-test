/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service130Service } from '../../services/service-130.service';

@Component({
  selector: 'app-comp-130',
  templateUrl: './comp-130.component.html',
  styleUrls: ['./comp-130.component.css']
})
export class Comp130Component implements OnInit {

  constructor(private _service: Service130Service) { }

  ngOnInit() {
  }

}
