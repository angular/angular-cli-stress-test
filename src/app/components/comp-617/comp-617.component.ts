/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service617Service } from '../../services/service-617.service';

@Component({
  selector: 'app-comp-617',
  templateUrl: './comp-617.component.html',
  styleUrls: ['./comp-617.component.css']
})
export class Comp617Component implements OnInit {

  constructor(private _service: Service617Service) { }

  ngOnInit() {
  }

}
