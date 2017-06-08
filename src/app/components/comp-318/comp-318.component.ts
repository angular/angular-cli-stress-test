/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service318Service } from '../../services/service-318.service';

@Component({
  selector: 'app-comp-318',
  templateUrl: './comp-318.component.html',
  styleUrls: ['./comp-318.component.css']
})
export class Comp318Component implements OnInit {

  constructor(private _service: Service318Service) { }

  ngOnInit() {
  }

}
