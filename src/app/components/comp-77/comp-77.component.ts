/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service77Service } from '../../services/service-77.service';

@Component({
  selector: 'app-comp-77',
  templateUrl: './comp-77.component.html',
  styleUrls: ['./comp-77.component.css']
})
export class Comp77Component implements OnInit {

  constructor(private _service: Service77Service) { }

  ngOnInit() {
  }

}
