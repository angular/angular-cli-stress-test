/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service76Service } from '../../services/service-76.service';

@Component({
  selector: 'app-comp-76',
  templateUrl: './comp-76.component.html',
  styleUrls: ['./comp-76.component.css']
})
export class Comp76Component implements OnInit {

  constructor(private _service: Service76Service) { }

  ngOnInit() {
  }

}
