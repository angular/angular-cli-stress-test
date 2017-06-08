/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service44Service } from '../../services/service-44.service';

@Component({
  selector: 'app-comp-44',
  templateUrl: './comp-44.component.html',
  styleUrls: ['./comp-44.component.css']
})
export class Comp44Component implements OnInit {

  constructor(private _service: Service44Service) { }

  ngOnInit() {
  }

}
