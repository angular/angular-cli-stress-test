/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service884Service } from '../../services/service-884.service';

@Component({
  selector: 'app-comp-884',
  templateUrl: './comp-884.component.html',
  styleUrls: ['./comp-884.component.css']
})
export class Comp884Component implements OnInit {

  constructor(private _service: Service884Service) { }

  ngOnInit() {
  }

}
