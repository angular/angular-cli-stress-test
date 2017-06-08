/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp237Component } from './comp-237.component';

describe('Comp237Component', () => {
  let component: Comp237Component;
  let fixture: ComponentFixture<Comp237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
