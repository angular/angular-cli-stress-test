/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service513Service } from '../../services/service-513.service';

@Component({
  selector: 'app-comp-513',
  templateUrl: './comp-513.component.html',
  styleUrls: ['./comp-513.component.css']
})
export class Comp513Component implements OnInit {

  constructor(private _service: Service513Service) { }

  ngOnInit() {
  }

}
