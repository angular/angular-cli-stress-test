/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service48Service } from '../../services/service-48.service';

@Component({
  selector: 'app-comp-48',
  templateUrl: './comp-48.component.html',
  styleUrls: ['./comp-48.component.css']
})
export class Comp48Component implements OnInit {

  constructor(private _service: Service48Service) { }

  ngOnInit() {
  }

}
