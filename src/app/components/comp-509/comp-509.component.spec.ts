/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp509Component } from './comp-509.component';

describe('Comp509Component', () => {
  let component: Comp509Component;
  let fixture: ComponentFixture<Comp509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
