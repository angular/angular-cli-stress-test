/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service62Service } from '../../services/service-62.service';

@Component({
  selector: 'app-comp-62',
  templateUrl: './comp-62.component.html',
  styleUrls: ['./comp-62.component.css']
})
export class Comp62Component implements OnInit {

  constructor(private _service: Service62Service) { }

  ngOnInit() {
  }

}
