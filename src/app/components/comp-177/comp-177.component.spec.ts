/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp177Component } from './comp-177.component';

describe('Comp177Component', () => {
  let component: Comp177Component;
  let fixture: ComponentFixture<Comp177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
