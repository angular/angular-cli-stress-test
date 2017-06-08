/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service464Service } from '../../services/service-464.service';

@Component({
  selector: 'app-comp-464',
  templateUrl: './comp-464.component.html',
  styleUrls: ['./comp-464.component.css']
})
export class Comp464Component implements OnInit {

  constructor(private _service: Service464Service) { }

  ngOnInit() {
  }

}
