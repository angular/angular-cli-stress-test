/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1757Component } from './comp-1757.component';

describe('Comp1757Component', () => {
  let component: Comp1757Component;
  let fixture: ComponentFixture<Comp1757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
