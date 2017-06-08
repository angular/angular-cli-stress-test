/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service241Service } from '../../services/service-241.service';

@Component({
  selector: 'app-comp-241',
  templateUrl: './comp-241.component.html',
  styleUrls: ['./comp-241.component.css']
})
export class Comp241Component implements OnInit {

  constructor(private _service: Service241Service) { }

  ngOnInit() {
  }

}
