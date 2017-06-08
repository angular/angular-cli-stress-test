/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service3Service } from '../../services/service-3.service';

@Component({
  selector: 'app-comp-3',
  templateUrl: './comp-3.component.html',
  styleUrls: ['./comp-3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private _service: Service3Service) { }

  ngOnInit() {
  }

}
