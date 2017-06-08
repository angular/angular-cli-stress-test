/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp530Component } from './comp-530.component';

describe('Comp530Component', () => {
  let component: Comp530Component;
  let fixture: ComponentFixture<Comp530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
