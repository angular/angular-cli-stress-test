/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1466Component } from './comp-1466.component';

describe('Comp1466Component', () => {
  let component: Comp1466Component;
  let fixture: ComponentFixture<Comp1466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
