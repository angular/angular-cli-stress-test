/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service240Service } from '../../services/service-240.service';

@Component({
  selector: 'app-comp-240',
  templateUrl: './comp-240.component.html',
  styleUrls: ['./comp-240.component.css']
})
export class Comp240Component implements OnInit {

  constructor(private _service: Service240Service) { }

  ngOnInit() {
  }

}
