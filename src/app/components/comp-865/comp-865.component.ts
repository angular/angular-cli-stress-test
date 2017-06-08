/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service865Service } from '../../services/service-865.service';

@Component({
  selector: 'app-comp-865',
  templateUrl: './comp-865.component.html',
  styleUrls: ['./comp-865.component.css']
})
export class Comp865Component implements OnInit {

  constructor(private _service: Service865Service) { }

  ngOnInit() {
  }

}
