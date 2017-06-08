/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service37Service } from '../../services/service-37.service';

@Component({
  selector: 'app-comp-37',
  templateUrl: './comp-37.component.html',
  styleUrls: ['./comp-37.component.css']
})
export class Comp37Component implements OnInit {

  constructor(private _service: Service37Service) { }

  ngOnInit() {
  }

}
