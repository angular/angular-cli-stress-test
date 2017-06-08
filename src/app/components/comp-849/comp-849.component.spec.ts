/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp849Component } from './comp-849.component';

describe('Comp849Component', () => {
  let component: Comp849Component;
  let fixture: ComponentFixture<Comp849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
