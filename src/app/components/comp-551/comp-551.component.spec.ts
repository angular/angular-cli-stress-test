/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp551Component } from './comp-551.component';

describe('Comp551Component', () => {
  let component: Comp551Component;
  let fixture: ComponentFixture<Comp551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
