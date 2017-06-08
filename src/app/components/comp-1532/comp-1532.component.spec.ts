/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1532Component } from './comp-1532.component';

describe('Comp1532Component', () => {
  let component: Comp1532Component;
  let fixture: ComponentFixture<Comp1532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
