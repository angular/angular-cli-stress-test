/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service694Service } from '../../services/service-694.service';

@Component({
  selector: 'app-comp-694',
  templateUrl: './comp-694.component.html',
  styleUrls: ['./comp-694.component.css']
})
export class Comp694Component implements OnInit {

  constructor(private _service: Service694Service) { }

  ngOnInit() {
  }

}
