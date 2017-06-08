/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service420Service } from '../../services/service-420.service';

@Component({
  selector: 'app-comp-420',
  templateUrl: './comp-420.component.html',
  styleUrls: ['./comp-420.component.css']
})
export class Comp420Component implements OnInit {

  constructor(private _service: Service420Service) { }

  ngOnInit() {
  }

}
