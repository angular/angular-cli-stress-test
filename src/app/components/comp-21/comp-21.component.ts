/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service21Service } from '../../services/service-21.service';

@Component({
  selector: 'app-comp-21',
  templateUrl: './comp-21.component.html',
  styleUrls: ['./comp-21.component.css']
})
export class Comp21Component implements OnInit {

  constructor(private _service: Service21Service) { }

  ngOnInit() {
  }

}
