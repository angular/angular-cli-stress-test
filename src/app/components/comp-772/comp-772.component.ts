/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service772Service } from '../../services/service-772.service';

@Component({
  selector: 'app-comp-772',
  templateUrl: './comp-772.component.html',
  styleUrls: ['./comp-772.component.css']
})
export class Comp772Component implements OnInit {

  constructor(private _service: Service772Service) { }

  ngOnInit() {
  }

}
